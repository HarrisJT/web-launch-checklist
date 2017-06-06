# Web Launch Checklist

This website displays the most useful and effective tips for Performance, SEO, Security, Accessibility, Content, and Functionality for websites in checklist form. The checkboxes and counters persist through localstorage and the whole document can be downloaded in multiple formats. I want it to be easy to edit so please fork and suggest changes!

To start a development environment run these commands:

```npm install``` in the root directory of this project

```gulp default``` to watch for changes in main.scss and main.js

## Contributing

Please read the following for details on the process of submitting change ideas.

### Contributing with code:

Create a fork of this repository, run the above commands to start a development environment, then submit a pull request with a title starting either "New:", "Modify:", or "Remove:" depending on the nature of your change.

Here is a sample of what the HTML code block looks like where the all caps text is replaceable. The "..." is where I removed some fixed code for the purposes of examples.


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
* Repeat the ```<li class="checklist-item">``` block for more checklist items.
* Repeat the ```<section class="checklist">``` block for more checklist sections.

You should limit yourself to editing the:
* Title of the section *(h2 class="checklist__title")*
* Checklist item title *(span class="checklist-item__title")*
* Extra information, keep in mind that only unordered lists and links have defined styles *(div class="info")*



### Contributing without coding:

Create an [Issue](https://github.com/HarrisJT/web-launch-checklist/issues/new) with a title starting either "New:", "Modify:", or "Remove:" depending on the nature of your suggestion. Please be as detailed as possible and include credible links where necessary

***

* **Harris J. Thompson** - *Creator* - [Portfolio](https://harrisjt.com/)

See also the list of [contributors](https://github.com/HarrisJT/web-launch-checklist/graphs/contributors) who participated in this project.


This project is licensed under the CC BY-SA 4.0 License - see the [Creative Commons License](https://creativecommons.org/licenses/by-sa/4.0/deed.en_GB) website for details