Some time ago, I was looking for a flat bevel effect so, because I'm really lazy, I began looking for pre-made solutions... unfortunately none of them fitted my needs (in facts it was the needs of my client bu... ok nobody cares) : 
- jQuery Corners does it very well (http://jquery.malsup.com/corner/) with the option "bevel" but not on an image or gradient background.
- corners.js (http://www.netzgesta.de/corner/) does it too with the option "ibezel" but only on images, and I needed it on blocks with content inside
- there is no solution in CSS o_O other than some fucking shitty 3D effect with the same name "bevel" (seriously, who uses that ?? It's ugly !!)

As I looked forward, I found about the Border Slants (http://www.infimum.dk/HTML/slantinfo.html) but no hint on an automated effect for mass producing on a website.
So I decided, for my project and now for the glory, to make a jQuery plugin that would automate the process of making a beveled background on a HTML block.

Why this name ? "Biseau" is one of the french translations of "bevel", as I'm french and I lack imagination, I choosed that name. ;)

Usage : 
1/ Insert the jQuery and jQuery.biseau script in your page :
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<script type="text/javascript" src="../src/jquery.biseau.js"></script>

2/ Add a block in your HTML code of course (what would you want to bevel otherwise ??) with a size and a background color;
<div id="monbloc" style="width:100px;height:100px;background-color:#999999;"></div>

3/ Call the method on this block : 
		$(document).ready(function(){
			$('#monbloc').biseau({options});
		})

The options :
Just pass an object with theses properties : 
- tl : size of the Top Left bevel (default : 0)
- tr : size of the Top Right bevel (default : 0)
- bl : size of the Bottom Left bevel (default : 0)
- bt : size of the Bottom Right bevel (default : 0)
- zindex : In order to make the content of the block still visible, I use the z-index to order things. If you have some z-index issues, you may want to modify that. (default : 4)

See the little example included for... well... an example.

TODO : 
- add the possibility to make a border (should be possible)
- test, test and test again
- make it work on special tags like "table" ?