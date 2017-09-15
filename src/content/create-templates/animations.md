+++
date            = "2017-09-15T11:31:19+02:00"
author          = "@patrickpietens"

title           = "Animations"
description     = "The schedule is split into smaller, independent pieces called components."
keywords        = ["blokks", "templates", "themes", "structure", "layout"]
weight          = 507

[menu.main]
parent          = "create-templates"

[[related]]
title = "Activity details"
url = "basic-structure.md#activity-details"

[[related]]
title = "Easing functions"
url = "http://easings.net/"

[[related]]
title = "MDN: Using CSS animations"
url = "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"

[[related]]
title = "Chrome: Easing editor"
url = "https://developers.google.com/web/updates/2015/05/the-easing-editor"

[[related]]
title = "Chrome: Inspect animations"
url = "https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations"
+++

The `animation` property can be used to animate any CSS properties such as `color`, `background-color`, `width`, `height`, etc. Each animation needs to be defined with the `@keyframes` at-rule which is then called with the `animation` property, like so:

```css
.element {
  animation: present-element 300ms ease-out-back;
  transform: translate3d(0, 100px, 0);
}

@keyframes present-element {
  to {
    transform: none;
  }
}
```

## Animating modals & alerts
The [*Activity Details*]({{< relref "basic-structure.md#activity-details" >}}) components and all alerts use this technique to present themselves. To replace the animation with another one you only need to update the start value of the `transform` property. 

For example, make it bounce into screen:

```css
.element {
  transform: scale3d(0.9, 0.9, 1);
}
```
You can configure your `animation` by setting its sub-properties. This lets you tweak the timing, duration, and other details of how the animation sequence should progress. [Read more about animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

![Image: Animating modals & alerts](http://animating-modals.gif)

## Animating other elements
Modals and alerts are currently the only components which are presented with an animation. But this doesn’t mean that you are limited to those components. Matter of fact, [Embassy of Dutch Creativity](https://blokks.co/schedules/embassy-of-dutch-creativity) spiced up their schedule with all kinds of animations. 

So let yourself go.