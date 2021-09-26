---
title: "Jekyll Cheatsheet"
categories:
  - cheatsheet
tags:
  - jekyll
  - html
  - markdown
last_modified_at: 26 September 2021
---

A list of useful snippets I have been using.

### Inserting images centered
```ruby
![png]({{ site.baseurl }}/assets/images/toothbrush_algo/yt_vid.PNG){: .align-center }

```

### Inserting images with captions (centered)
There are other ways, but this is the most convenient. Note that `<center>` is deprecated. But as long as it works, i'll keep using this.

Example taken from Revising Recursion post.
```ruby
<center>
  <img src="{{site.baseurl}}/assets/images/revising_recursion/xkcd_recursion.png" alt="my alt text"/>
</center>
<center>This is an image</center>

```
[Resource](https://stackoverflow.com/questions/3912694/using-markdown-how-do-i-center-an-image-and-its-caption)



### Hyperlink

```ruby
But recently I came across this [the name of the link](google.com) ...

```
