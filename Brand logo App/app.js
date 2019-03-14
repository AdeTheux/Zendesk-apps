(function() {

    requests: {
      createTicket: function(data) {
        return {
          url: '/api/v2/tickets.json',
          dataType: 'json',
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json'
        };
      }
    },
    
  return {
    requests: {    
      fetchTags: function(user_id){
        return {
          url: helpers.fmt('/api/v2/tags.json'),
          dataType: 'json',
          type: 'GET'
        };
      }
    },    
    
    events: {
      'app.activated':'appInit',
      'fetchTags.done':'fetchTagsDone'      
    },

    appInit: function() {
      this.ajax("fetchTags", var ticket = this.ticket();
      ticket.tags(););
      
      this.$("div#care_premium").hide();
      this.$("div#care").hide();      
      this.$("div#essential_services").hide();      
      
    },


    fetchTagsDone: function(data) {
      this.brand_name = data.user.user_fields.brand_name;
      console.log(this.brand_name);

      if (this.brand_name == "sunsail") {
        this.$("div#care_premium").show();
      }
      else if (this.brand_name == "care") {
        this.$("div#care").show();      
      }
      else if (this.brand_name == "essential_services") {
        this.$("div#essential_services").show();
      }
    }

  };

}());

this.ticket().tags()