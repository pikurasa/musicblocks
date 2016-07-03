function PitchStairCase() {

    this.Stairs = [];

	this.init = function(logo) {

        console.log(this.Stairs);
        console.log(blocks.blockList[this.Stairs[0]].connections);  

		console.log("init PitchStairCase");
		this.logo = logo;

		docById('pitchstaircase').style.display = 'inline';
        console.log('setting PitchStairCase visible');
        docById('pitchstaircase').style.visibility = 'visible';
        docById('pitchstaircase').style.border = 2;

        var w = window.innerWidth;
        this.cellScale = w / 1200;
        docById('pitchstaircase').style.width = Math.floor(w / 2) + 'px';
        docById('pitchstaircase').style.overflowX = 'auto';
		
		var thisStair = this;

		var table = docById('buttonTable');

		if (table !== null) {
            table.remove();
        }

        var table  = docById('stair');

        if (table !== null) {
            table.remove();
        }

        var iconSize = Math.floor(this.cellScale * 24);

        var x = document.createElement('TABLE');
        x.setAttribute('id', 'buttonTable');
        x.style.textAlign = 'center';
        x.style.borderCollapse = 'collapse';
        x.cellSpacing = 0;
        x.cellPadding = 0;

        var StairDiv = docById('pitchstaircase');
        StairDiv.style.paddingTop = 0 + 'px';
        StairDiv.style.paddingLeft = 0 + 'px';
        StairDiv.appendChild(x);
        StairDivPosition = StairDiv.getBoundingClientRect();

        var x = document.createElement('TABLE');
        x.setAttribute('id', 'stair');
        x.style.textAlign = 'center';
        x.style.borderCollapse = 'collapse';
        x.cellSpacing = 0;
        x.cellPadding = 0;
        StairDiv.appendChild(x);

        var table = docById('buttonTable');
        var header = table.createTHead();
        var row = header.insertRow(0);
        row.style.left = Math.floor(StairDivPosition.left) + 'px';
        row.style.top = Math.floor(StairDivPosition.top) + 'px';

        var cell = row.insertCell(-1);
        cell.innerHTML = '&nbsp;&nbsp;<img src="header-icons/close-button.svg" title="' + _('close') + '" alt="' + _('close') + '" height="' + iconSize + '" width="' + iconSize + '" vertical-align="middle">&nbsp;&nbsp;';
        cell.style.width = Math.floor(MATRIXBUTTONHEIGHT * this.cellScale) + 'px';
        cell.style.minWidth = cell.style.width;
        cell.style.maxWidth = cell.style.width;
        cell.style.height = Math.floor(MATRIXBUTTONHEIGHT * this.cellScale) + 'px';
        cell.style.backgroundColor = MATRIXBUTTONCOLOR;


        cell.onclick=function() {
            docById('pitchstaircase').style.visibility = 'hidden';
        };

        cell.onmouseover=function() {
            this.style.backgroundColor = MATRIXBUTTONCOLORHOVER;
        };

        cell.onmouseout=function() {
            this.style.backgroundColor = MATRIXBUTTONCOLOR;
        };

        var table = docById('stair');
        var header = table.createTHead();
        var row = header.insertRow(0);
        row.style.left = Math.floor(StairDivPosition.left) + 'px';
        row.style.top = Math.floor(StairDivPosition.top) + 'px';


        for (var i = 0; i < thisStair.Stairs.length; i++) {

            var cell = row.insertCell(i);

            var args0 = blocks.blockList[thisStair.Stairs[i]].connections[1];
            var args1 = blocks.blockList[thisStair.Stairs[i]].connections[2];

            var solfege = blocks.blockList[args0].value;
            var octave = blocks.blockList[args1].value;
            console.log(solfege);
            console.log(octave);

            var solfegetonote = this.logo.getNote(solfege, octave, 0, this.logo.keySignature[this.logoturtle])[0];
            console.log(solfegetonote);

            cell.style.width = StairDivPosition.width + 'px';
            cell.innerHTML = this.logo.getNote(solfege, octave, 0, this.logo.keySignature[this.logoturtle]) + " "  + Math.floor(pitchToFrequency(solfegetonote, octave, 0, this.logo.keySignature[this.logo.turtle]));
            cell.style.minWidth = cell.style.width;
            cell.style.maxWidth = cell.style.width;
            cell.style.height = Math.floor(RHYTHMRULERHEIGHT * this.cellScale) + 'px';
            cell.style.backgroundColor = MATRIXNOTECELLCOLOR;
        }
	};

};