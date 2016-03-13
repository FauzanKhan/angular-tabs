;(function(angular){
  var app = angular.module('ngTabs', []);
  app.directive('tabNav', function(){ 
    return{
      restrict: 'A',
      link: function(scope, element, attrs, ctrl){
        var tabTriggers = element[0].children; 
        var tabGroup = attrs.tabGroup;
        var showTab = function(triggerEle){
          for(var j=0; j<tabTriggers.length; j++){
            var trigger = tabTriggers[j].children[0];
            trigger.classList.remove('active');
          }
          var tabsInGroup = document.querySelectorAll('.tab-panel[data-tab-group="'+tabGroup+'"]');
          for(var j=0; j<tabsInGroup.length; j++){
            tabsInGroup[j].style.display = "none";
          }
          var targetTabName = triggerEle.getAttribute('data-target-tab');
          var targetTab = document.querySelectorAll('.tab-panel[data-tab-group="'+tabGroup+'"][data-tab-name="'+targetTabName+'"]')[0];
          triggerEle.classList.add('active');
          targetTab.style.display = "block";
        }
        for(var i=0; i<tabTriggers.length; i++){
          var trigger = tabTriggers[i].children[0];
          if(trigger.classList.contains('active')){
            showTab(trigger);
          }
          trigger.addEventListener('click', function(e){
            e.preventDefault();
            showTab(this);
          });
        }

      }
    }
  })
})(angular);