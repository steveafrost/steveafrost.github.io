webpackJsonp([0xf4fd03d36ca80000],{"./node_modules/json-loader/index.js!./.cache/json/articles-using-homebrew-the-best-package-manager-for-macos.json":function(e,a){e.exports={data:{site:{siteMetadata:{title:"Steve Frost – Full Stack Web Developer",author:"Steve Frost"}},markdownRemark:{id:"/Users/stevefrost/Development/Websites/steveafrost.github.io/src/pages/articles/using-homebrew-the-best-package-manager-for-macos.md absPath of file >>> MarkdownRemark",html:'<p>\nIt is hard for me to hold back the excitement for <a href="http://brew.sh/">Homebrew</a>. It has saved me hundreds of hours, surely. If the feeling of frustration with juggling dependencies, root paths, compiling, repair, and updating packages is familiar, Homebrew is here to save you as well.</p>\n<p><strong>What is Homebrew?</strong></p>\n<p>Well, what is Homebrew you might be asking? Homebrew is a relatively new package manager - more on what “package” means later - that first saw light in 2009 and more recently reached v1.0 on Sept 21, 2016. Before Homebrew, Mac users had a similar manager called Macports which was really popular. The two share many qualities but also part in a few ways - mostly that Homebrew believes in avoiding patching whenever possible.</p>\n<p>So what are packages? In the broad, most frequent sense, packages are <a href="https://computers.tutsplus.com/tutorials/homebrew-demystified-os-xs-ultimate-package-manager--mac-44884">installable bundles of source code.</a> If you scour the internet you can find many official packages and some not so official - looking at you Jekyll-Test-Plugin-Malicious that has the tagline “I will eat all of your code.” Official packages usually come with a very supportive community and lots of people who have run into common issues but even with that, there are frequently issues I encouter that are specific to my operating system version, current environment, etc - and you will/have/always run into these kind of issues while installing packages.</p>\n<p>This exact headache is why <a href="https://twitter.com/mxcl">Max Howell</a>, creator of Homebrew, came up with the idea. Well that, and he wanted a package manager that was beer themed because the “puns to package manager ratio was far too low” as <a href="https://twitter.com/MikeMcQuaid">Mike McQuaid</a> hilariously referenced on <a href="http://5by5.tv/rubyonrails/221">Oct 4th’s Ruby on Rails podcast</a>.</p>\n<p>Now that you know some of the backstory about Homebrew and what exactly it does, let’s go over installing, typical use, and then some tips &#x26; tricks.</p>\n<p><strong>Installing Homebrew</strong></p>\n<p>To install Homebrew, open up your Terminal and enter <code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code>. If you’re curious what this script does, there is a description that is printed out in the terminal that includes that information. Once Homebrew is installed, any package can be installed via the command <code>brew package</code> i.e. <code>brew zzz</code> which is a package for a <a href="https://github.com/Orc/Zzz">command-line MacOS sleep program</a>. This will install the package into your Cellar according to the Formula. Here is a brief list of the common Homebrew puns/terms you’ll come across.</p>\n<ul>\n<li>Formula - the package definition</li>\n<li>Keg - the installation prefix of a formula</li>\n<li>Cellar - the place where all Kegs are stored</li>\n<li>Tap - an optional git repository of formulae and/or commands</li>\n<li>Bottle - when a pre-built keg is used instead of building from source</li>\n<li>Cask - an <a href="https://github.com/caskroom/homebrew-cask">extension of homebrew</a> to install macOS native apps</li>\n<li>Brew Bundle - an <a href="https://github.com/Homebrew/homebrew-bundle">extension of homebrew</a> to describe dependencies</li>\n</ul>\n<p><strong>Maintaining Homebrew</strong></p>\n<p>Okay, so you’ve gone hog wild with the puns, putting kegs in your cellar, tapping casks, and bonging repositories (not a real one) - how do you keep these all updated? Enter another wonderful thing about Homebrew. To update your packages, just use <code>brew upgrade</code> and Homebrew will search through your Cellar and upgrade all packages to the most recent source available. To keep Homebrew itself updated, that is simple - enter <code>brew update</code> in the Terminal. Each time Homebrew updates, new packages are made available to install.</p>\n<p><strong>Tips &#x26; Tricks</strong></p>\n<ul>\n<li><code>brew info kegname</code> displays info about that package</li>\n<li><code>brew cleanup</code> to remove older, unused Formula versions</li>\n<li><code>brew ls kegname</code> shows how the keg is arranged in your Cellar</li>\n<li><code>brew outdated</code> to see what is outdated and could use a <code>brew upgrade</code></li>\n<li><code>brew pin kegname</code> will prevent a keg from being updated and <code>unpin</code> will undo</li>\n</ul>\n<p><strong>Conclusion</strong></p>\n<p>Give Homebrew a try and <a href="https://twitter.com/SteveEff">let me know how</a> you like it. As a new Rails developer, it has been a godsend for installing things like geckodriver, imagemagick, and sqlite. While installing each of these manually, I came across issues that Homebrew easily resolved <em>and</em> I don’t have to worry about keeping the packages up-to-date. Homebrew does a wonderful job of <a href="https://github.com/Homebrew/brew/tree/master/docs">documentation</a> - THANK YOU - so you’ll rarely be left in the dark. Even with these docs, there may be an issue or improvement to offer. If there is a way you can contribute, don’t hesitate to fork, edit, and open a pull request to help out the community. Before investing your time, view the <a href="https://github.com/Homebrew/brew/blob/master/docs/FAQ.md">FAQ</a> as that could answer the question or address the issue.</p>\n<p>Enjoy!</p>',frontmatter:{title:"Using Homebrew - The Best Package Manager for MacOS",date:"November 19, 2016"}}},pathContext:{path:"/articles/using-homebrew-the-best-package-manager-for-macos"}}}});
//# sourceMappingURL=path---articles-using-homebrew-the-best-package-manager-for-macos-62a122a495ff04807b4d.js.map