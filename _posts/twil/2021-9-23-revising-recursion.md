---
title: "Revising Recursion"
categories:
  - TWIL
tags:
  - recursion
  - python
  - java
---

Preparing for coding interviews has been weighing on my mind as I near the end of my university education and get ready for the real world. One of the (many) topics I used to struggle with when I just started coding has been recursion. No matter how many times I tried to break down the question, I was just not able to grapple with the concept *especially when a slightly tweaked question came up*. It was as if I recursed (yes pun intended) back to 0 when a new question was introduced.

<center>
  <img src="{{site.baseurl}}/assets/images/revising_recursion/xkcd_recursion.png" alt="my alt text"/>
</center>
<center>Source: xkcd.com</center>
<br>


Now that it's been a few more years of struggling through other coding problems, it doesn't seem as hard as I remembered it to be. So I tried out some LeetCode questions to make sure I actually got the basic concepts right. And fortunately, I was able to get the solutions without having to peek at Google. I won't be winning any competitive programming competitions any time soon, but I'm definitely satisfied with my progress. Here's a few relevant ideas I learnt from (reluctantly) revising recursion.

# 1. Visualize the problem
<center>
  <img src="{{site.baseurl}}/assets/images/revising_recursion/visualizing_1.png" alt="my alt text"/>
</center>
<center>Pardon the bad handwriting</center><br>

As much as I would like to think I got this all in my head, drawing out the problem actually helps in 2 ways. Firstly, we get to simplify the problem into its most basic form. Once we have done this enough times, you'll realize that some of the questions are basically the same with different wordings. 

Secondly, drawing things out is just a very useful tool for troubleshooting. When I assume I have the right answer and just code it out, I rarely get it right the first time. So drawing out the problem step by step really helps me to understand which part of the solution I had made a wrong assumption on. Most profs will usually recommend you plan out what you are going to do before you actually start coding. I'd like to admit that i'm too impatient for that kind of process. But whenever I do stop to visualize the problem and my solution, i'm always more confident that my solution will work the first time 🙂.

# 2. Understand what you are getting back.
> *Wishful thinking: The assumption that we already know how to solve a subproblem in a recursive problem*

I was introduced to this idea of wiI was introduced to this idea of wishful thinking by Prof Martin Henz when it came to solving recursive questions. As someone who had never come across such an idea, it was very hard for me to assume we had already solved the problem especially when we were in the process of solving the problem. At that time I applied this concept with some success. But it was mostly due to me assuming the problem was solved and hoping that I could wing it for the rest of the problem.

Now with a bit more hindsight, my main issue was that **I was unsure what exactly was solved and how it was "given back" to me**. Let's look at a pretty famous example and my initial thought process.

## Problem: Reversing Linked List
*Note: I will not be fully explaining the solution, just the part that I struggled with.*

Input: `head = [1,2,3]`

![png]({{ site.baseurl }}/assets/images/revising_recursion/linked_list_1.PNG){: .align-center }

Output: `head = [3,2,1]`
![png]({{ site.baseurl }}/assets/images/revising_recursion/linked_list_2.PNG){: .align-center }

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # base cases
        if not head:
            return head
        elif not head.next:
            return head

        # recursive cases
        else:
            # WISHFUL THINKING
            new_head = Solution().reverseList(head.next)
            ...
```

This is what I initiall thought wishful thinking would give me:
![png]({{ site.baseurl }}/assets/images/revising_recursion/linked_list_3.PNG){: .align-center }

On first glance this makes sense. Now all you have to do is get 2 to point to 1 (`2 → 1`) and for 1 to point to null (`1→ null`). But what happens when the length of the list increases? You would have to keep to keep doing more and more head.next. This means the problems is not being broken down properly!


After a bit of sketching around, I realised what the actual subproblem is supposed to look like:
![png]({{ site.baseurl }}/assets/images/revising_recursion/linked_list_4.PNG){: .align-center }

This makes a lot more sense:
1. 1 is connected to 2: initially, I assumed that `1 -> 3`. It's unlikely that wishful thinking would also change the pointers of the current case.

2. This removes the problem of perpetually increasing `head.next` as the list length increases. Now we can easily access `2` using the `head` pointer.

The final solution:
```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #base cases
        if not head:
            return head
        elif not head.next:
            return head
        
        # recursive cases
        else:
            # WISHFUL THINKING
            new_head = Solution().reverseList(head.next)

            # final steps
            head.next.next = head
            head.next = None
            return new_head
```
![png]({{ site.baseurl }}/assets/images/revising_recursion/linked_list_5.PNG){: .align-center }
![png]({{ site.baseurl }}/assets/images/revising_recursion/linked_list_6.PNG){: .align-center }

# 3. Double check your understanding by coding in a different language
Although Python is my bread and butter, I definitely have quite a bit of experience coding in Java and R. My basic algorithms course was actually done using Java. So trying to code out the same solution in Java is not only a good refresher to the language, I get to check my understanding by implementing the  algorithm again. 

```java
public class Solution {
  public ListNode reverseList(ListNode head) {
    // base case
    if (head == null) or (head.next == null) {
      return head;
    } else {
      // new_head -> 3 -> 2 -> null
      ListNode new_head = reverseList(head.next);

      // 2 -> 1
      head.next.next = head;
      // 1 -> null
      head.next = null;
      return new_head;
    }
  }
}
```
> At the end of the day, I'm not trying to copy perfect code snippets into Leetcode. Understanding the algorithms as pseudocode is much more helpful as you will never be stuck wondering if you can implement the same code in a different language. At that point, it's only a matter of understanding the language syntax.


# Some issues I'm currently working on


## 1. How to move from recursive to iterative solutions.
As much as recursion is a good topic to practice on and are just more elegant to read, iterative solutions give us a much clearer view of the complexity of the algorithm. I would think that once you have a solution, it would be easy to convert. But it seems to me like we are trying to work on the problem in a different direction.

## 2. Memoization
To make our solutions even faster, we can try to use memoization. It's also gonna play a part in Dynamic programming. So that will be the next topic I'll be trying to work on too.