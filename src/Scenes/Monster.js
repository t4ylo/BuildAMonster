class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX + 80, this.bodyY - 50, "monsterParts", "body_whiteC.png");
        my.sprite.leftarm = this.add.sprite(470, 325, "monsterParts", "arm_greenB.png" );
        my.sprite.rightarm = this.add.sprite(290, 325, "monsterParts", "arm_greenB.png");
        my.sprite.rightarm.flipX = true;
        my.sprite.leftleg = this.add.sprite(440, 450, "monsterParts", "leg_redA.png");
        my.sprite.rightleg = this.add.sprite(325, 450, "monsterParts", "leg_redA.png");
        my.sprite.rightleg.flipX = true;
        my.sprite.head1 = this.add.sprite(380, 150, "monsterParts", "body_yellowB.png");
        my.sprite.smile =  this.add.sprite(380, 210, "monsterParts", "mouthH.png");
        my.sprite.fangs = this.add.sprite(380, 200, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.antenna1 = this.add.sprite(440, 55, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.antenna2 = this.add.sprite(320, 55, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.antenna2.flipX = true;
        my.sprite.eye1 = this.add.sprite(335, 140, "monsterParts", "eye_blue.png");
        my.sprite.eye2 = this.add.sprite(425, 140, "monsterParts", "eye_blue.png");
        my.sprite.close_eye = this.add.sprite(425, 140, "monsterParts", "eye_closed_feminine.png");

        my.sprite.close_eye.visible = false;

        my.sprite.fangs.visible = true;
        my.sprite.smile.visible = false;

        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        
    }

    moveMonsterBy(dx) {
        for (let part in this.my.sprite) {
            this.my.sprite[part].x += dx;
        }
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
       
        if (this.FKey.isDown) {
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
            my.sprite.eye2.visible = true;
            my.sprite.close_eye.visible = false;

        };
        
        if (this.SKey.isDown) {
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
            my.sprite.eye2.visible = false;
            my.sprite.close_eye.visible = true;

        };
        
        if (this.AKey.isDown && !this.DKey.isDown) {
            this.moveMonsterBy(-2);  // move left
        } else if (this.DKey.isDown && !this.AKey.isDown) {
            this.moveMonsterBy(2);   // move right
        };
        

       
    }

}