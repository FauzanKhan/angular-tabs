
# ngTabs
---
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
---
### Description
An angular directive for creating tabs.

### Installation
* Get the ngTabs.js, ngTabs.css from dist folder.

### Usage
* Make sure you include the  ```ngTabs``` module in you angular app:

```
angular.module('myApp', ['ngTabs']);
```

* once you've added the module in your app. Use the code below to get the tabs up and running:

```html
<ul class="tab-nav" tab-nav data-tab-group="tabs-demo">
      <li><a class="active"  data-target-tab="tab-1">Tab#1</a></li>
      <li><a data-target-tab="tab-2">Tab#2</a></li>
      <li><a data-target-tab="tab-3">Tab#3</a></li>
</ul>
<div class="tabs-panels">
	<div class="tab-panel" data-tab-group="tabs-demo" data-tab-name="tab-1">
		<!--  Tab 1 content goes here-->
	</div>
	<div class="tab-panel" data-tab-group="tabs-demo" data-tab-name="tab-2">
		<!--  Tab 2 content goes here-->
	</div>
	<div class="tab-panel" data-tab-group="tabs-demo" data-tab-name="tab-3">
		<!--  Tab 3 content goes here-->
	</div>
</div>
```
###Demo
visit <a href="http://fauzankhan.github.io/angular-tabs/">http://fauzankhan.github.io/angular-tabs/</a> to see the directive in action

