"use strict";

function OnLoadGameMenuUI()
{
	$.RegisterForUnhandledEvent( 'VRTouchApproach', function( panel, flApproachPercentage )
	{
		if ( panel.paneltype != "Button" )
		{
			return;
		}

		//$.Msg( "VRTouchApproach( " + panel.id + ", " + flApproachPercentage + ")" );
		
		if ( !panel.BHasClass( "VRTouchApproach" ) )
		{
			panel.SetHasClass( "VRTouchApproach", true );
		}
		
		panel.style['pre-transform-scale2d'] = 0.8 + ( flApproachPercentage * 0.2 );
	} );

	$.RegisterForUnhandledEvent( 'StyleFlagsChanged', function( panel )
	 {
		if ( panel.paneltype != "Button" )
		{
			return;
		}
		
		// $.Msg( "StyleFlagsChanged( " + panel.BHasHoverStyle() + ", " + panel.BHasClass( "VRTouchApproach" ) + ")" );

		if ( !panel.BHasHoverStyle() && panel.BHasClass( "VRTouchApproach" ) )
		{
			panel.ClearPropertyFromCode( "pre-transform-scale2d" );
			panel.RemoveClass( "VRTouchApproach" );
		}
	} );
}

function OnLoadGameMenuUIUsingClasses()
{
    $.RegisterForUnhandledEvent( 'VRTouchApproach', function( panel, flApproachPercentage )
    {
		// $.Msg( "VRTouchApproach( " + JSON.stringify( panel.id ) + ": " + flApproachPercentage + " )" );

		var strActiveClass = "";
		if ( flApproachPercentage < 0.25 )
		{
			strActiveClass = "VRTouchApproach25";
		}
		else if ( flApproachPercentage < 0.5 )
		{
			strActiveClass = "VRTouchApproach50";
		}
		else if ( flApproachPercentage < 0.75 )
		{
			strActiveClass = "VRTouchApproach75";
		}
		else if ( flApproachPercentage < 0.9 )
		{
			strActiveClass = "VRTouchApproach90";
		}
		else
		{
			strActiveClass = "VRTouchApproach100";
		}

		// $.Msg( "Active class = " + strActiveClass );
		panel.SwitchClass( "VRTouchApproachClass", strActiveClass );
    } );
}
