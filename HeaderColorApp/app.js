(function(){
  var setCss = function(){
    this.Em.$('#branding_header').css('background', '#011334 url(https://p3.zdassets.com/hc/theme_assets/496336/200024441/rblogo.png) 3px 15px no-repeat');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.web').css('background-color', '#d2003c');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.web').css('color', '#ffffff');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.web').css('border-top', '1px solid #d2003c');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.web').css('text-shadow', 'none');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.chat').css('background-color', '#d2003c');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.chat').css('color', '#ffffff');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.chat').css('border-top', '1px solid #d2003c');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.chat').css('text-shadow', 'none');
    this.Em.$('#tabs .tab .close').css('color', '#ffffff');
    this.Em.$('#tabs .tab.add').css('background-color', '#CCCCCC');
    this.Em.$('#tabs .tab.add').css('border-top', '1px solid #CCCCCC');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.selected').css('color', '#d2003c');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.selected .close').css('color', '#000000');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.selected').css('background-color', '#FBFBFB');
    this.Em.$('#tabs.ember-view.column.ember-view li.tab.selected').css('border-top', '1px solid #FBFBFB');
  }.bind(this);
  // Pull in zendesk built in functions

  return {
    events: {
      'app.activated': 'onAppActivated'
    }, //end events

    onAppActivated: function() {
      setCss();
    }
  };
}());
