webpackJsonp([0x43150191436b580],{"./node_modules/json-loader/index.js!./.cache/json/articles-building-a-website-using-middleman.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Steve Frost – Full Stack Web Developer",author:"Steve Frost"}},markdownRemark:{id:"/Users/stevefrost/Development/Websites/steveafrost.github.io/src/pages/articles/building-a-website-using-middleman.md absPath of file >>> MarkdownRemark",html:'<p>Static Site Generators were all the hype in 2016 and remain an indispensable option for tech-savvy, or courageous, people looking to create a website. Roughly, they sit somewhere in-between create individual HTML, CSS, and JS files and using a feature-rich solution like WordPress. After using WordPress for projects for several years, I’ve started to make a switch to these lighter, simpler generators for the recent sites I’ve created. Here we’ll talk about the two options I’ve used, how they compare to each other, benefits over WordPress, and further insight into generators.</p>\n<p>Over the past 2 weeks I’ve been working on a website for a client using <a href="https://middlemanapp.com/">Middleman</a> and have completely fell in love with it. Middleman is one of several emerging static-site generators which provide a robust, modern toolset to create a website, typically without a database. My introduction into static-site generators was when I built - and rebuilt, and rebuilt - this website using Jekyll which is one of the <a href="https://www.staticgen.com/">most popular options</a>.</p>\n<h3>Using Middleman Over Jekyll</h3>\n<p>My affection for Ruby led me to each of these as they’re both written in the <a href="https://www.ruby-lang.org/en/about/">most beautiful, artful programming language</a>. After using each generator, I’ve noticed there are more similarities between the two than differences. </p>\n<p>Since they’re both written in Ruby, there is a Gemfile that can be used to <a href="https://jekyllrb.com/docs/plugins/">extend each through gems/plugins</a> &#x26; provide a quick way to clone the project and get started using <code>bundle install</code>. Each option also comes with a built-in way to run a local server enabling <a href="https://middlemanapp.com/basics/development-cycle">real-time development cycle</a>: make a change in the HTML file and see the changes instantly in your browser without ever having to deploy code to a live server. In addition, both work without the use of a database. This can be limiting in some ways as we’ll see in the next section but does have perks. Instead of the typical request cycle involving a database which can be plodding, a static-site generator packages up the site into a collection of flat, static HTML files which can be served to the user lightning fast. </p>\n<p>As far as differences, I see Jekyll as a blog-centric solution and Middleman for everything else. Middleman uses more Rails conventions such as helper methods and <a href="http://www.rubyinside.com/sprockets-a-ruby-powered-javascript-dependency-library-from-37signals-1520.html">Sprockets</a>. Middleman can also be made into a blog with a <a href="https://directory.middlemanapp.com/#/extensions/all">community extension</a> though if the project requires a blog, Jekyll is the perfect fit for that. These two generators also differ on templating language. <a href="https://jekyllrb.com/docs/templates/">Jekyll’s uses Liquid</a> which was conceived by Shopify while Middleman ships with <a href="https://middlemanapp.com/basics/templating-language/">support for ERB &#x26; HAML</a>. Coming from a Rails background, I find ERB &#x26; HAML to be more straight-forward than Liquid. Other people like <a href="https://www.sitepoint.com/ditching-erb-a-guide-to-using-liquid/">Liquid because is easily extendable</a>. As most things in programming, this one is personal preference.</p>\n<h3>Generators vs WordPress</h3>\n<p>So why did I switch from creating websites in WordPress to using generators? The simple answer is that most projects don’t require the feature-rich environment of a WordPress installation. If the project doesn’t require users, forms, or ecommerce, ditch the database. Using one when it isn’t needed is overkill which adds overhead to page loads and also opens up the site to <a href="http://www.zdnet.com/article/the-top-ten-most-common-database-security-vulnerabilities/">vulnerabilities</a>, including the <a href="https://en.wikipedia.org/wiki/SQL_injection">number one type of attack</a>. In contrast, one of the lacking areas of generators compared to WordPress is that they do not have an administration UI by default. That means to edit the website, the actual files need to be changed instead of having a visual editor. This is <a href="https://www.sitepoint.com/7-reasons-not-use-static-site-generator/">one of the main reasons</a> for avoiding generators. As always, pick the right tool for the right job. If the site owners are technically-apt or the maintenance will only be done by the developer, the admin UI is another unnecessary overhead. If the site is going to be turned over to people who aren’t so comfortable working with raw files, an admin UI can be an immense benefit for both sides.</p>\n<h3>Shortcomings and Dealing with Them</h3>\n<p>After hours of research and tinkering with generators, I’ve come across some useful ways to combat a few shortcomings of generators. Sometimes one or two features of a database-driven website are needed but not enough to justify using a database – this is where creativity is useful. The most vital issue that I recently solved with the help of fellow generator-enthusiast, <a href="http://www.joelbitar.space/">Joel Bitar</a>, was the need for a form on a Middleman site. Typically a form requires a backend to process the form and store the user data. Both Jekyll and Middleman communities have come up with ways to circumvent this using paid options like <a href="https://formkeep.com/guides/contact-form-middleman">FormKeep</a> and <a href="https://getsimpleform.com/">SimpleForm</a> or free solutions like <a href="http://railsrescue.com/blog/2015-05-28-step-by-step-setup-to-send-form-data-to-google-sheets/">submitting the form to Google Sheets</a>. Another feature most blogs like to have that generators fall short on is comments. Currently, Jekyll has a few solutions to this including the one used here on this blog, <a href="http://www.perfectlyrandom.org/2014/06/29/adding-disqus-to-your-jekyll-powered-github-pages/">Disqus</a>. </p>\n<h3>What’s Next?</h3>\n<p>After playing around with the two Ruby-based generators here, I’m looking to try out a few popular Javascript-based ones soon. Mostly, I am curious to try ones like <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> that incorporate current hot topics like components once I have a project that benefits from having reusable pieces of code. Until then, I’ll be building a few more Middleman &#x26; Jekyll sites to refine those skills and summarizing any insightful experiences here. If you have any questions or tips of your own, leave them in the comments below!</p>',frontmatter:{title:"Building a Website using Middleman",date:"February 26, 2017"}}},pathContext:{path:"/articles/building-a-website-using-middleman"}}}});
//# sourceMappingURL=path---articles-building-a-website-using-middleman-d5095baa57703654a631.js.map