(function() {

  return {
    events: {
      'ticket.priority.changed':'OnStatusChanged',
    },

    OnStatusChanged: function() {
    this.switchTo('main');
	}
  };

}());
