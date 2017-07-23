webpackJsonp([0x82e3a7779650b8],{"./node_modules/json-loader/index.js!./.cache/json/articles-questioning-the-quirks-of-php.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Steve Frost – Full Stack Web Developer",author:"Steve Frost"}},markdownRemark:{id:"/Users/stevefrost/Development/Websites/steveafrost.github.io/src/pages/articles/questioning-the-quirks-of-php.md absPath of file >>> MarkdownRemark",html:'<p></p>\n<p>Typically, you’ll find my desktop stacked with windows about Javascript &#x26; static-site generators, two of my loves, but lately I’ve been spending time getting to know PHP better. To this point, most of my PHP knowledge comes from tinkering with the PHP templates of posts, pages, etc within WordPress. To become more familiar with the language, I’ve started primarily using <a href="https://laracasts.com">Laracasts</a> which has some <a href="https://laracasts.com/series/php-for-beginners">advantageous tutorials</a> done by <a href="https://www.quora.com/Why-is-Jeffrey-Jordan-Way-such-an-awesome-kid">Jeffrey Jordan Way</a>.</p>\n<p>Resources aside, here are some quirks that I’ve found in my ongoing deep-dive into PHP. To make this list, the behavior has to be some level of strange, mysterious, and other-worldly with at least of few <a href="https://stackoverflow.com/documentation/php/topics">Stack Overflow</a> questions starting with the words, why on earth.</p>\n<h3>Omit Closing Tags on Pure PHP Files</h3>\n<p>Early on in PHP fundamentals it’s taught that if a PHP file has only PHP in it, vs PHP &#x26; HTML, then the closing tag (<code>?></code>) is optional. In an attempt to be buttoned up, my inclination was to include them unless there was rationale behind the practice. <a href="https://www.sitepoint.com/should-you-close-your-php-code-tags/">SitePoint champions an explanation</a> and includes a couple reasons.</p>\n<p></p>\n<ol>\n<li>\n<p>The closing tag is not needed to run the file. Since it’s not necessary, and keeping code <a href="https://en.wikipedia.org/wiki/Don&#x27;t_repeat_yourself">DRY</a> is <a href="https://code.tutsplus.com/tutorials/3-key-software-principles-you-must-understand--net-25161">one of the key software principles</a>, the tags should be omitted.</p>\n</li>\n<li>\n<p>It can cause conflicts at run time. If the PHP closing tag is included and there is any whitespace or new line after it, then there will be an issue when importing that code in other files using <code>require</code>. Since PHP will read until <a href="https://stackoverflow.com/questions/2405818/does-eof-actually-exist">EOF</a>, or end of file, then it will notice the whitespace and load it as part of the file. This is most notably a problem when trying to edit headers with PHP as any extra character after the closing tag will be sent to the page as content. Once the page receives content, the headers cannot be modified and instead will throw an error. Worse yet, if the production server has errors turned off, there will be a silent fail of the entire page. </p>\n</li>\n</ol>\n<h3>More to Come</h3>\n<p>Since I’ll be neck-deep in PHP continuously, this list will grow each week. That is unless PHP has a limited amount of quirks and if it’s initial resemblance to Javascript is any kind of indicator, I’ll have reams to discover.</p>',frontmatter:{title:"Questioning the Quirks of PHP",date:"June 05, 2017"}}},pathContext:{path:"/articles/questioning-the-quirks-of-php"}}}});
//# sourceMappingURL=path---articles-questioning-the-quirks-of-php-2b382f38b7f92089c34e.js.map