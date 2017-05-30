# Web Launch Checklist

This website displays the most useful and effective tips for Performance, SEO, Security, Accessibility, Content, and Functionality. I want it to be easy to edit so please fork and suggest changes!

To start a development environment run these commands:

```npm install``` in the root directory of this project

```gulp default``` to watch for changes in main.scss and main.js

***
### Contributing

Please read the following for details on the process for submitting pull requests.

Here is a sample of what the HTML code block looks like where the all caps text is replaceable. The "..." is where I removed some unimportant code.

````HTML
 <section class="checklist">
        <h2 class="checklist__title">TITLE OF SECTION</h2>
        ...
        <ul class="checklist-container">
            <li class="checklist-item">
                <input id="" type="checkbox"/><label for="" class="checkbox"></label><span
                    class="checklist-item__title">CHECKLIST ITEM TITLE</span>
               ...
                <div class="info-container">
                    <div class="info">
                        EXTRA INFORMATION
                    </div>
                </div>
            </li>
````
You should limit yourself to editing the:
* Title of the section *(h2 class="checklist__title")*
* Checklist item title *(span class="checklist-item__title")*
* Extra information, keep in mind that only unordered lists and links have defined styles *(div class="info")*

Repeat the ```<li class="checklist-item">``` block for more checklist items.
***

* **Harris J Thompson** - *Creator* - [Portfolio](https://harrisjt.com/)

See also the list of [contributors](https://github.com/HarrisJT/web-launch-checklist/graphs/contributors) who participated in this project.


This project is licensed under the CC BY-SA 4.0 License - see the [Creative Commons License](https://creativecommons.org/licenses/by-sa/4.0/deed.en_GB) website for details