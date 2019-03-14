(function() {

  return {

    // Here we define AJAX calls
    requests: {

      fetchBookmarks: function() {
        // An event will trigger when this request happens (L#40)
        return {
          url: '/api/v2/users/308881431.json',
          type: 'GET'
        };
      };
    },

    // Here we define events such as a user clicking on something
    events: {

      // The app is active, so call requestBookmarks (L#65)
      'app.activated': 'requestBookmarks',

      'fetchBookmarks.always': function(data) {
        this.renderBookmarks((data || {}).bookmarks);
      },

      'click .bookmark': function(event) {
        event.preventDefault();
        this.ajax('addBookmark');
      },

      'addBookmark.always': function(data) {
        this.ajax('fetchBookmarks');
      },

      'addBookmark.done': function() {
        services.notify(this.I18n.t('add.done', { id: this.ticket().id() }));
      },

      'addBookmark.fail': function() {
        services.notify(this.I18n.t('add.failed', { id: this.ticket().id() }), 'error');
      }

    },

    // Below this point, you're free to define your own functions used by the app

    requestBookmarks: function() {
      // Make a request called fetchBookmarks (L#15)
      this.ajax('fetchBookmarks');
    },

    renderBookmarks: function(bookmarks) {
      this.bookmarks = bookmarks;
      this.switchTo('list', {
        bookmarks:            this.bookmarks,
        ticketIsBookmarkable: this.ticketIsBookmarkable()
      });
    },

    ticketIsBookmarkable: function() {
      var status = this.ticket().status() || 'closed';
      if ( status == 'closed' ) { return false; }

      var ticketID = this.ticket().id(),
          alreadyBookmarked = _.any(this.bookmarks, function(b) {
            return b.ticket.nice_id === ticketID;
          });

      return !alreadyBookmarked;
    }

  };

}());