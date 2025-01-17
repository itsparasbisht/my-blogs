Let’s say you have two branches: `main` and `feature-1`. You’re actively working on the `feature-1` branch, making progress and regularly committing your changes. Once your feature is complete, it's time to merge the `feature-1` branch back into `main`.

By default, a merge will bring over all the individual commits from `feature-1` into `main`. While this is great for preserving a detailed history, it can clutter the `main` branch with too many granular commits, making it harder to track the overall changes.

## What is a Squash Merge?

This is where a `squash merge` comes in handy. A squash merge allows you to condense all the commits from `feature-1` into a single commit when merging into `main`. This approach provides a cleaner commit history in the `main` branch, making it easier to review and understand the changes over time.

## Benefits of Using Squash Merge

It’s important to note that while the `feature-1` branch retains its detailed commit history, the `main` branch will only have a single commit representing all the changes made in `feature-1`. This is particularly useful for keeping the `main` branch's history clean and easy to navigate.

## When to Use Squash Merges

You don't always have to use a squash merge, but it’s a good practice if you prefer a more streamlined commit history in your `main` branch or if your repository is public and you want to maintain a clean, professional history of changes.
<br>
<br>

![](https://i.ibb.co/31BK2B4/git-merge-squash.jpg)
