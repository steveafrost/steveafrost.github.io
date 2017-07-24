webpackJsonp([0xbb4a699a12217800],{"./node_modules/json-loader/index.js!./.cache/json/articles-a-greenhorns-approach-to-angular.json":function(e,a){e.exports={data:{site:{siteMetadata:{title:"Steve Frost – Full Stack Web Developer",author:"Steve Frost"}},markdownRemark:{id:"/Users/stevefrost/Development/Websites/steveafrost.github.io/src/pages/articles/a-greenhorns-approach-to-angular.md absPath of file >>> MarkdownRemark",html:'<p>I started learning Angular over a month ago as part of my final section at Flatiron School… about a week ago I actually started to understand Angular, I think. This seems to be the typical trajectory, and sentiment, as there is <em>so</em> much information on what Angular is and how Angular is done. After reading material, watching tutorials, and practicing small segments of Angular, I started on my final project a few weeks ago. There were <a href="https://github.com/steveafrost/daily-documentary/blob/master/spec.md">several specific specs</a> provided for the project with the general idea being that the back-end would be Rails while the front-end would be Angular.</p>\n<p>In this post I’ll provide the material that was useful to me when starting out on Angular, the hang ups, and the engineering decisions that were constructed on my first Angular project.</p>\n<h3>Front-End Package Management</h3>\n<p>Immediately upon starting my project I was met with something I’ve never dabbled with before - installing &#x26; maintaining front-end dependencies for Javascript. At this point, I had heard somewhat about different tools on the JS scene like <a href="https://www.npmjs.com/">NPM</a>, <a href="https://bower.io/">Bower</a>, and <a href="https://yarnpkg.com/">Yarn</a>. A majority of the <a href="https://www.youtube.com/watch?v=zKkUN-mJtPQ">Angular tutorial videos</a> that I watched used Bower so I set down that road at first until I came along a recent development called RailsAssets in <a href="https://gorails.com/episodes/rails-assets">this valuable GoRails video</a>.</p>\n<p>If you’re using Rails, I really like <a href="https://rails-assets.org/#/">Rails Assets</a> over Bower. More or less, Rails Assets will look at the same repo file Bower would (bower.json) and then it repackages that manifest file into a gem. This all happens on the Rails Assets backend and the only thing needed on your side is to include a block w/ a new source for gems and then list the gem.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>source <span class="token string">\'https://rubygems.org\'</span>\n\ngem <span class="token string">\'rails\'</span>\ngem <span class="token string">\'sass-rails\'</span>\ngem <span class="token string">\'uglifier\'</span>\ngem <span class="token string">\'coffee-rails\'</span>\n\nsource <span class="token string">\'https://rails-assets.org\'</span> <span class="token keyword">do</span>\n  gem <span class="token string">\'rails-assets-bootstrap\'</span>\n  gem <span class="token string">\'rails-assets-angular\'</span>\n  gem <span class="token string">\'rails-assets-leaflet\'</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>Using Rails Assets over Bower has several benefits:</p>\n<ul>\n<li>There is no need for an extra bower.json file. All packages (or gems) &#x26; dependencies live in Gemfile.</li>\n<li>Since everything is in one file, we only need <code>bundle install</code> to install all packages whereas with Bower &#x26; Bundler we’d need to run two different commands, <code>bundle install</code> and <code>bower install</code>.</li>\n<li>Front-end packages are now included in the asset pipeline. <a href="http://guides.rubyonrails.org/asset_pipeline.html">More about Asset Pipeline benefits</a>.</li>\n<li>Compared to traditional Ruby gems, there is no waiting for an author to update their gem. Rails Assets repackages bower.json files when they are updated at the source.</li>\n</ul>\n<p>After using rails-assets.org for the entirety of this project, I can say I really enjoyed this way of managing front-end packages. It had all the features of Bower, that I know of, and the added benefits listed above. When I do a project without Rails, I will opt for Bower. However, if the project uses a Rails backend then I’ll be utilizing the Rails Assets method.</p>\n<h3>Choosing a Design Framework</h3>\n<p>Even though design is not a graded criteria at Flatiron, I find that many students and creators in general will strive to have a polished product after putting in innumerable hours of work. Along those lines, the second decision I made after a package manager was what design framework I wanted to use. On previous projects and side-jobs I had used <a href="http://getbootstrap.com/">Bootstrap</a> &#x26; <a href="http://foundation.zurb.com/">Foundation</a> so I went looking for something different. </p>\n<p>After considering that I was using Google’s Angular framework for my front-end, I narrowed my search to design frameworks that supported directives that I could plug straight into Angular. This slimmed down the options to just a handful: Angular Bootstrap, Angular Foundation, Ionic, UI Grid, or Angular Material. Since both Angular &#x26; Material were created by Google, I decided to try an app that had them paired up. I also really enjoyed the <a href="https://material.io/guidelines/">Material approach to design</a> which supports a mobile-first design (the good ones do) with emphasis on user interaction and bright colors. If the purpose of Material design interests you, WIRED did a good piece on what <a href="https://www.wired.com/insights/2014/12/google-material-design/">Google’s Material Design Is Really About</a>.</p>\n<p>Since this was my first experience with Material, I struggled at first with simple concepts such as layout. There is an abundance of Flexbox usage in Material which is robust once you learn <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">how it works</a> but can be aggravating if you’re coming from the row/column behavior of a framework like Bootstrap. Other features like the services provided by Material seamlessly integrated with Angular. One that I couldn’t believe how easy it was to use was the $mdToast service which provides options for showing a “toast” or notification on the screen as a result of an action.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">addToWatchlist</span><span class="token punctuation">(</span>docTitle<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> profileFactory<span class="token punctuation">.</span><span class="token function">addToWatchlist</span><span class="token punctuation">(</span>docTitle<span class="token punctuation">)</span>\n                           <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>showMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">function</span> <span class="token function">showMessage</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          $mdToast<span class="token punctuation">.</span><span class="token function">showSimple</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>title <span class="token operator">+</span> <span class="token string">\' added to watchlist\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>That simple! If you want to further <a href="https://material.angularjs.org/latest/api/service/$mdToast">configure the $mdToast service</a> there are plenty of options available for that as well.</p>\n<p>That leads to my final point about Angular Material - the documentation is has been extraordinary in my experience. It is split between a few pages which can be tough but each provides a look from a different angle. The two pages that were most useful were the <a href="https://material.angularjs.org/latest/demo/">Demo Documentation</a> which shows live demos of each feature of the framework and the <a href="https://material.angularjs.org/latest/api/directive/mdAutocomplete">API Documentation</a> which details the finer points of the features.</p>\n<h3>Engineering Decisions</h3>\n<p>The Angular community is the fastest changing, most style-opinionated language I’ve encountered since I’ve started at Flatiron. That has the benefit of being on the bleeding edge of the JS Framework scene but you also come across conflicting resources. In light of this, I used the style guide &#x26; Angular pieces with the widest adoption at the time of creating my project.</p>\n<p>The style guide I settled on was <a href="https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#single-responsibility">John Papa’s Style Guide</a> which is an impressive collection of guidelines for writing Angular. The guide is so impressive that the Angular team themselves adopted it for Angular 1 and even brought on John Papa for creating a style guide when they created Angular 2. Papa also wrote a <a href="https://johnpapa.net/angular-app-structuring-guidelines/">descriptive post</a> on his site about how to structure your app.</p>\n<p>As far as what types of Angular pieces to use, I settled on using controllers, factories, and templates. While controllers are fairly common place in Angular 1, some developers use Components which more closely model Angular 2 and other popular JS frameworks like React. The more research I did about the Angular 1 community, the more it seemed like Angular 1 developers used components for a period then went back to controllers &#x26; factories, so I stuck to these. Additionally, there are services which are used often too. Factories are simply a kind of service with less overhead and can usually be used 90% of the time instead of using a full-fledged service. When considering which is needed, reading <a href="https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html">a comparison of services vs factories</a> was especially constructive.</p>\n<p>As far as the templates, there were two options: place them within my Rails public folder or use <a href="https://github.com/pitr/angular-rails-templates">angular-templates</a> to incorporate them with the asset pipeline. I chose the latter since my original decision to use Rails-Assets instead of Bower also capitalized on using the asset pipeline. Using this gem was a breeze: include the gem in the Gemfile, create a templates folder next to your controllers &#x26; factories folders, insert your html templates in there, and reference them by filename from anywhere in your Angular app.</p>\n<h3>Wrapping It Up</h3>\n<p>As is the case with learning new material, Angular was frustrating at first. Similar to jQuery, once I figured it out I started to really enjoy the immediacy of the framework &#x26; the structural organization that Angular offers. Though most of the industry has adopted React as their primary JS framework, I really enjoyed Angular and plan to refine what I’ve learned before moving onto learning React - I am inspirited to start React though! Soon.</p>\n<p>It is bittersweet to be finishing Flatiron School. In the past 8 months I’ve learned more about web development than years of using learning on my own. It doesn’t stop here though. After graduation there will be additional resources opening up that cover Node &#x26; React, a few side-projects that are in the planning phases, and personal project ideas that are brewing. Hopefully that more opportunities like Flatiron come along in the future. The time here has instilled that there will consistently be emerging technologies to try, struggle with, and most satisfyingly, learn.</p>',frontmatter:{title:"A Greenhorn's Approach to Angular",date:"January 19, 2017"}}},pathContext:{path:"/articles/a-greenhorns-approach-to-angular"}}}});
//# sourceMappingURL=path---articles-a-greenhorns-approach-to-angular-cb65bcb3bfe2bd92e267.js.map