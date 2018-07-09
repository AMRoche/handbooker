# Genesys GM Binder Theme



Header 1 should be used to create chapter titles (like above). The first letter of the next text block will be capitalized just like this automatically! Headline 1 and Headline 2 both also span both columns. If you separate your text above a Headline 1 or Headline 2 with a blank line in the editor it will automatically shift the contents of everything after the blank line to the second size.

     If you reach the end of a column it will roll over to the next column automatically, but this will not always create an attractive spacing at the bottom. You can force GM binder to start a new column like this by using the `\columnbreak` command. To indent a paragraph (they should be after the first under each header) just use about 5 ` ` before the text.

## Headline 2

Headline 2 denotes major sections of the chapter. Whenever you need a header inside a chapter, this should be your go to!


### Headline 3

Headline 3 is simply a 2nd layer of denotation you can use. Any time you need to separate out different ideas underneath an H2, use this.


#### Headline 4

This is to be used inside the "Notes" with the bottom row underlined. More information on this later.

<div style="margin-top:45px"></div>

##### Headline 5

Headline 5 is simply a 3rd layer of denotation you can use. Any time you need to separate out different ideas underneath an H3, use this. Note, that this is usually the deepest level of denotation you should use. If you are doing a considerable list, consider using Headline 6 instead.


###### Headline 6
Headline 6 is used to create lists that require significant detail. It is most notably used to list talents. This is a bottom tier header, meaning there should never be any headers "underneath" it in the document.


## Type Faces

There are many different type faces. Underlines can be created with the HTML `<u></u>` tag, while the rest can be done with <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code">markdown</a>.

* **Bold**
* *Italics*
* ~~Strikethrough~~
* <u>Underline</u>
* ^Super^
* <sup>SuperScript</sup>
* <sub>SubScript</sub>
* [Internal Link](https://www.gmbinder.com)
* [External Link](https://www.reddit.com/r/uneartherarcana)

1. Item 1
2. Item 2
3. Item 3

* Item 1
* Item 2
* Item 3

## Footers and Pages

Footers, like the one at the bottom of this page, can be created with the following code:

```
<div class="footnote">THEME TESTER<BR /><p>GENESYS</p></div>
```

     When you're ready to end a page, you can use

`\pagebreaknum`. This will automatically create a new page for you! If you're at the end of your document, and don't want a new page, you'll want to hide the blank page with `<style> #pX{ display: none;}</style>`, where "X" is the number of the page that needs hidden.



<div class="footnote">THEME TESTER<BR />
<p>GENESYS</p></div>

\pagebreakNum

<div class='note'>

#### <u>Symbol Key</u>

<br />

Note: The bottom line of these boxes title's should be underlined with the HTML underline tag. <br />
<span class='symbols'>a</span> = Advantage<br>
<span class='symbols'>h</span> = Threat<br>
<span class='symbols'>f</span> = Failure<br>
<span class='symbols'>s</span> = Success<br>
<span class='symbols'>t</span> = Triumph<br>
<span class='symbols'>d</span> = Despair<br>
<span class='setback'>b</span> = Setback Dice<br>
<span class='boost'>b</span> = Boost Dice<br>
<span class='difficulty'>d</span> = Difficulty Dice<br>
<span class='ability'>d</span> = Ability Dice<br>
<span class='challenge'>c</span> = Challenge Dice<br>
<span class='proficiency'>c</span> = Proficiency Dice <br>

You can create a "Note" box like this with
```
<div class='note'></div>
```
. To create the dice and their symbols

</div>

<div style="margin-top:10px;"></div>

 To create the dice and their symbols, use:

```
<span class='symbols'>a, h, f, s, t, d </span>
<span class='setback'>b</span>
<span class='boost'>b</span
<span class='difficulty'>d</span>
<span class='ability'>d</span>
<span class='challenge'>c</span>
<span class='proficiency'>c</span>
```

<div class='example'>

##### Example
You can create example boxes like this with
```
<div class='example'></div>
```

</div>

<div style="margin-top:25px;"></div>

<div class="read"> Read Aloud Text  like this is created with the HTML DIV tag and the "read" class. It normally has some more stuff in it so I'm just gonna type a bit of random mumbo jumbo to make the box a little bigger.</div>

<div style="margin-top:25px;"></div>




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Stat Blocks

You can create a number of stat blocks as seen in the book with the following code:

##### Archetype Statblock

<div class="archetype">
<span class="bra">121</span>
<span class="agi">2</span>
<span class="int">3</span>
<span class="cun">4</span>
<span class="wil">5</span>
<span class="pre">6</span>
</div>

```
<div class="archetype">
<span class="bra">1</span>
<span class="agi">2</span>
<span class="int">3</span>
<span class="cun">4</span>
<span class="wil">5</span>
<span class="pre">6</span>
</div>
```

##### Adversary and Minion Statblock

<div class="adversary">
<span class="soak">7</span>
<span class="wound">18</span>
<span class="strain">19</span>
<span class="mdef">0</span>
<span class="rdef">1</span>
</div>

<div class="minion">
<span class="soak">7</span>
<span class="wound">10</span>
<span class="mdef">1</span>
<span class="rdef">1</span>
</div>

Start with an Archetype then add:

```
<div class="adversary">
<span class="soak">7</span>
<span class="wound">18</span>
<span class="strain">19</span>
<span class="mdef">0</span>
<span class="rdef">1</span>
</div>
```

Or use "minion" for the class, and delete the strain span.

##### Vehicle Statblock

<div class="vehicle">
<span class="sil">1</span>
<span class="speed">3</span>
<span class="hand">2</span>
<span class="armor">4</span>
<span class="def">5</span>
<span class="ht">55</span>
<span class="ss">66</span>
</div>

```
<div class="vehicle">
<span class="sil">1</span>
<span class="speed">3</span>
<span class="hand">2</span>
<span class="armor">4</span>
<span class="def">5</span>
<span class="ht">55</span>
<span class="ss">66</span>
</div>
```



<div class="footnote">THEME TESTER<BR />
<p>GENESYS</p>
</div>

\pagebreakNum


<div class="note wide">

#### <u>Wide Note</u>

In the Genesys book there are notes and tables that span both columns like this. Simply add the "wide" class to either one to get this effect. Be careful, though, as it does wreak havoc on the page's formatting - be prepared to manually position some of the paragraphs and items on these pages.

<br/>

##### Table Titles are a Headline 5
| Other Stuff will go here | In a wide table |
|:---:|:---:|
| And Here |  And Here |
| <span class='difficulty'>d</span> <span class='symbols'>a</span> | Symbols work in tables too! |


### Bug List


</div>


##### Chart of Examples
<table>
    <thead>
        <tr>
            <th>ROLL</th><th>RESULT</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class='symbols'>a or t</span></td><td>Recover 1 strain. Add <span class='boost'>b</span> to next check by yourself or  ally.  </td>
        </tr>
        <tr class="subheader">
            <td colspan="2">"Subheader" is a tr class</td>
        </tr>
        <tr>
        <td><span class='symbols'>aa or t</span></td><td> Perform an immediate free maneuver (still max 2 per turn). Add <span class='boost'>b</span> to next skill check by opponent.</td>
        </tr>
        <tr>
        <td><span class='symbols'>aaa or t</span></td><td> Negate enemy defense. Ignore environment. Damage a target's gear/limbs. Gain +1 defense for 1 turn.</td>
        </tr>
    </tbody>
</table>

You can use markup to create tables just fine, normally, but you do need to build the table in HTML if you want to use a "Subheader" row (such as a weapon table). Unforunately Markdown doesn't support applying a class to a table row!

     You can also create an index for your document (and with a little bit of formatting, use this to create a table of contents as well!) The title page for index is just a Headline 2, wide, and centered. The code for the letters and rows is below:

```
<span class="index-letter">A</span>
<ul class="index">
<li><span>Apple</span><span>32</span></li>
<li><span>Angry</span><span>25</span></li>
</ul>
```
     This will automatically space the dots for you, so no worrying about counting them out! You can see the example on the next page.

\columnbreak

<div style="margin-top:25px;"></div>

     In the Genesys book, images that don't blend into the background are surrounded by the frame like below. Simply add the "nonblended" class to the image tag when adding it to create this surround.

<img class="non-blended" style="width:325px" src="https://cf.geekdo-images.com/images/pic1074405_md.jpg">




<div class="footnote">THEME TESTER<BR />
<p>GENESYS</p></div>

\pagebreakNum

<div class="wide">

<center>

## Index

</div>

<div style="margin-top:25px;"></div>

<span class="index-letter">A</span>
<ul class="index">
<li><span>Apple</span><span>32</span></li>
<li><span>Angry</span><span>25</span></li>
</ul>

<div class="note">

#### <u>Change Log</u>

##### 2/8/18

* Updated sheet to use the "Crimson Text" font in leiu of Minion. This will keep the document more uniform as all fonts can now be hosted.
* Adjusted font sizes/weights to more accurately represent the book.
* Added "Minion" statblock
* Updated "Adversary" statblock - the characteristics are now applied separately with an "archetype" statblock. * Resized statblocks to prevent background clipping
*Sswapped position of "Handling" and "speed" in vehicle stat block - **Note: PREVIOUSLY MADE STAT BLOCKS NEED TO SWAP THESE SPANS AS WELL, OR FORMATTING WILL BE BROKEN**
* Corrected a bug that prevented subheaders on certain table rows.
* Added spacing between paragraphs.
* Provided instructions to indent subsequent paragraphs - cannot be done automaticaly as forced paragraph breaks are neccessary for breaking columns sometimes.
* Removed image sizing from the non-blended image - image sizing should be done in the image tag.
* Made some improvements to the Style Guide
* General cleaning of CSS code


</div>

\columnbreak

<div style="margin-top:25px;"></div>

<span class="index-letter">B</span>
<ul class="index">
<li><span>Bangarang</span><span>42</span></li>
<li><span>Batman</span><span>33, 126</span></li>
</ul>

<div class="footnote">THEME TESTER<BR />
<p>GENESYS</p></div>



\pagebreakNum
