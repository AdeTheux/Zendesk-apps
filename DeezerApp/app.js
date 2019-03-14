(function() {
  return {
    requests: {
      search: function(query){
        return {
          url: 'http://api.deezer.com/search?q=%@'.fmt(query),
          type: 'GET',
          dataType: 'json',
          proxy_v2: true
        };
      }
    },

    events: {
      /* APP */
      'app.activated': 'activated',
      /* AJX */
      'search.done': 'searchDone',
      /* DOM */
      'submit .form-search': 'searchFired'
    },

    activated: function(){
      var data = this.store('data');

      if(data){
        this._query(data.info.query);
        this.switchTo('results', data);
      }
    },

    searchFired: function(){
      this.switchTo('spinner');
      this.ajax('search', this._query());
    },

    searchDone: function(data){
      data.ids = _.map(data.tracks, function(track){
        return track.href.match(/deezer:track:(.*)/)[1];
      }).slice(0,20).join(',');

      this.store('data', data);
      this.switchTo('results', data);
    },

    _query: function(val){
      var $input = this.$('.search-query');

      if (val)
        return $input.val(val);
      return $input.val();
    }
  };

}());
