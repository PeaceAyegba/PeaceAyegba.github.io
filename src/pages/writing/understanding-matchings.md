---
layout: ../../layouts/Post.astro
title: Understanding Graph Matchings
description: An example of mathematical writing, proofs and diagrams.
category: Example · Graph Algorithms
date: 2026-11-06
---
This is a **sample article**, included to show how mathematical writing will appear on the website. Replace it with your own work when ready.

Consider a bipartite graph $G=(U\cup V,E)$. A matching is a set of edges in which no two edges share a vertex.

A maximum matching $M$ has the largest possible size:

$$
|M|=\max\{ |M'|:M'\text{ is a matching in }G\}.
$$

## Algorithm sketch

```text
M ← empty matching
while an augmenting path P exists:
    M ← M △ E(P)
return M
```

## Add an iPad drawing

Export your drawing as PNG, then upload it to `public/images/` in GitHub. Insert it in your post with:

```markdown
![My graph drawing](/images/my-graph.png)
```

You can write the article directly on GitHub using Markdown. No separate blogging account is needed.
