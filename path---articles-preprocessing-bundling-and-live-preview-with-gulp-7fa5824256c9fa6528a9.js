webpackJsonp([0x64782d50fdec9000],{"./node_modules/json-loader/index.js!./.cache/json/articles-preprocessing-bundling-and-live-preview-with-gulp.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Steve Frost – Full Stack Web Developer",author:"Steve Frost"}},markdownRemark:{id:"/Users/stevefrost/Development/Websites/steveafrost.github.io/src/pages/articles/preprocessing-bundling-and-live-preview-with-gulp.md absPath of file >>> MarkdownRemark",html:'<p></p>\n<p>A common phenomenon in the community is that we regularly build upon abstractions that have been established without fully understanding what they are or how to build them ourselves. On one hand, if we dug down into every abstraction to the individual pieces that make it work, we’d probably never get any work done. On the other hand, I believe it’s important to have at least a general understanding of what is going on under the hood so if there is an issue, I can fix it. In the intersection between ‘no idea how it works’ and <a href="https://steveafrost.com/building-a-website-using-middleman/">static-site generators</a> is the development environment setup by these generators.</p>\n<p>After using such generators as Jekyll, Middleman, and Gatsby, I became interested in how to build such an environment that included preprocessing for SASS, bundling for javascript files, and live reload for an efficient <a href="https://www.smashingmagazine.com/2013/02/designing-great-feedback-loops/">feedback loop</a>. </p>\n<p>When I received my next side project, I started to look for what kind of tools were being used for this and came across three: <a href="http://gulpjs.com/">Gulp</a>, <a href="https://gruntjs.com/">Grunt</a>, and <a href="https://webpack.github.io/">Webpack</a>. If you’ve been within earshot of even a single developer over the past half year, you’ve probably heard about at least Webpack. It’s generating the most buzz right now particularly because it works well with the emerging Javascript frameworks like React. That said, I put it on my short list of tools to learn because I’ve read that it can be overwhelming to learn especially if it is your first build tool. Instead, I wanted to start with a build tool that has been around for longer and is the older brother in some ways: <a href="http://gulpjs.com/">Gulp</a>.</p>\n<h3>Unboxing Gulp</h3>\n<p>Put simply, Gulp can do a ton. Out of the box, there are simple functions like <code>.src</code> and <code>.dest</code> to designate source &#x26; destination folders. There are simple ways to read, process, and return the result in the same folder but I’d suggest structuring your project with a <code>./source</code> and <code>./build</code> folder. The source folder is where the individual, unbundled, unminified, unoptimized files will live and after Gulp is done, the build folder will contain these same files organized in a manner that is fully web optimized &#x26; ready to ship.</p>\n<h3>Gulp Plugins Starter Kit</h3>\n<p>When Gulp really starts to shine is with plugins. You can find an entire list <a href="http://gulpjs.com/plugins/">here</a>. In fact, you’ll need a few plugins to do the automation/building we’re going to do.</p>\n<ul>\n<li><em>gulp-sass</em> used for preprocessing SASS files and turning them into one cumulative CSS file. This is beneficial because then rules can be separated by topic, section, or other designation and the production site wouldn’t know otherwise. It also helps in reducing load times &#x26; server load because there’s only one request made to the server for one CSS file rather than multiple requests for multiple files. </li>\n<li><em>gulp-concat</em> used for bundling all Javascript included in the project. This has similar benefits to the gulp-sass plugin in that it allows for separation of code and reduces server requests to a single request for one bundled Javascript file.</li>\n<li><em>gulp-sourcemaps</em> used for guiding back to the original SCSS or JS file. Most modern browsers support sourcemaps now and they’re a great way to keep tabs on the individual files </li>\n<li><em>browser-sync</em> used for live preview of code. This allows for any changes made to HTML/CSS/JS/etc to show up instantly within the browser reducing the feedback loop to nearly seconds.</li>\n</ul>\n<h3>Other Optional, Cool Plugins</h3>\n<ul>\n<li><em>gulp-imagemin</em> used for minifying images and optimizing them so that each image is the smallest it can be without sacrificing noticeable quality. Since images typically are the heaviest lifting on a project, this is a favorite.</li>\n<li><em>gulp-clean</em> used for cleaning our build folder with a simple <code>gulp clean</code> command so that the folder doesn’t contain stagnant, unused files. Great item to run every once and then or loop into your regular build process.</li>\n<li><em>gulp-rename</em> used for renaming files after running a task on them. This is optional since the original filename might be all that is needed for certain projects.</li>\n<li><em>gulp-sequence</em> used for running multiple tasks in a sequence rather than asynchronously. Gulp 4.0 will <a href="https://fettblog.eu/gulp-4-parallel-and-series/">support this out of the box</a> with <code>.series</code> &#x26; <code>.parallel</code> functions.</li>\n</ul>\n<h3>Using Gulp</h3>\n<p>Once we have the plugins we need, we can move into the actual automation of the tasks. The pattern I like to follow is to make individual tasks each with their own name then rolling all of them into one general <code>gulp build</code> command. For example, here is a few tasks to process the SASS, bundle JS, and launch live preview.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Process ./source/assets/css/main.scss to ./build/assets/css/styles.css</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'processSass\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'source/assets/css/main.scss\'</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>sourcemaps<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">sass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>sourcemaps<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token string">\'styles.css\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true">// optional renaming</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'build/assets/css/\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>browserSync<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">{</span>stream<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Process ./source/assets/js/* to ./build/assets/js/bundle.js</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'concatJS\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'source/assets/js/*.js\'</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>sourcemaps<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'scripts.js\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>sourcemaps<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'build/assets/js\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n             <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>browserSync<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">{</span>stream<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Load browserSync to create local server &amp; hot reload</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'browserSync\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  browserSync<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    server<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      baseDir<span class="token punctuation">:</span> <span class="token string">\'build\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>If you’ve never used Gulp before, don’t let those lines scare you away from it. They are using fundamental Javascript patterns of anonymous functions, objects, and chaining. The techniques &#x26; code are outlined incredibly in the docs for more clarity.</p>\n<p>Next, I like to take each of these tasks and combine them into a single command which will watch our files &#x26; run the tasks when it detects any changes. That looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Assemble preprocessor, bundle js, and live preview to create dev environment</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'develop\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'processSass\'</span><span class="token punctuation">,</span> <span class="token string">\'concatJS\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'browserSync\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  gulp<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">\'source/assets/css/**/*.scss\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'processSass\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  gulp<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">\'source/assets/js/*.js\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'concatJS\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Here, we provide the task <code>develop</code> with the two previously created tasks <code>processSass</code> &#x26; <code>concatJS</code> which tells the task to run these before running anything inside of the task itself - the <code>.watch</code> items in this case. Once the initial tasks are run, <code>.watch</code> functions keep an eye on the folders where the CSS &#x26; JS files are located and will rerun the <code>processSass</code> &#x26; <code>concatJS</code> tasks if there are any changes detected. The processed and/or bundled code will then be injected into our browser thanks to the task <code>browserSync</code> (<a href="https://www.browsersync.io/">more about BrowserSync</a>) which was also included. Pretty cool!</p>\n<h3>Conclusion</h3>\n<p>Armed with these plugins, specifically the starter kit list, we can do all the ‘magic’ done by static-site generators and further customize the tasks for our specific project. It is fun to work with Gulp and can be motivating work knowing that each task is automating work usually done manually over and over. Also, once you have an established setup, many of the tasks can be saved and reused with slight, if any, modification to provide a jumping off point for projects.</p>',frontmatter:{title:"Preprocessing, Bundling, and Live Preview with Gulp",date:"July 03, 2017"}}},pathContext:{path:"/articles/preprocessing-bundling-and-live-preview-with-gulp"}}}});
//# sourceMappingURL=path---articles-preprocessing-bundling-and-live-preview-with-gulp-7fa5824256c9fa6528a9.js.map