"use strict";

var g_nNumChars = 0;
var g_CurrentLine = 0;
var TARGETS = [ '#line1a', '#line1b' ]
var STRINGS = []

var SECONDS_PER_CHAR = 0.15;

function UpdateTextForTime()
{
	if ( g_CurrentLine >= TARGETS.length )
		return;

	var fullText = $.Localize( STRINGS[g_CurrentLine] );
	var subText = fullText.slice( 0, g_nNumChars )
	var target = $( TARGETS[ g_CurrentLine ] );
	target.text = subText;

	g_nNumChars++;

	if ( g_nNumChars > fullText.length )
	{
		g_nNumChars = 0;
		g_CurrentLine++;
	}

	$.Schedule( SECONDS_PER_CHAR, UpdateTextForTime );
}

function StartAnim()
{
	STRINGS = []
	for ( var i = 0; i < TARGETS.length; i++ )
	{
		var target = $( TARGETS[i] );
		STRINGS.push( target.text )
		target.text = "";
	}
	$.Schedule( SECONDS_PER_CHAR, UpdateTextForTime );
}

(function()
{
	StartAnim();
})();

