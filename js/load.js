var loadState = {
	preload: function(){
		var txtLoading = game.add.text(game.world.centerX,150,'LOADING...',{font:'15px emulogic',fill:'#fff'});
			txtLoading.anchor.set(.5);
	
		var progressBar = game.add.sprite(game.world.centerX,250,'progressBar');
			progressBar.anchor.set(.5);
			
		game.load.setPreloadSprite(progressBar);
		
		game.load.image('bg','img/bg.png');
		game.load.image('block','img/block.png');
		game.load.image('end','img/end.png');
		game.load.image('part','img/part.png');
		
		game.load.spritesheet('coin','img/coin.png',32,32);
		game.load.spritesheet('enemy','img/enemy.png',24,40);
		game.load.spritesheet('player','img/player.png',24,32);
		
		game.load.audio('getitem','sfx/getitem.ogg');
		game.load.audio('loseitem','sfx/loseitem.ogg');
		game.load.audio('music','sfx/music.ogg');
		game.load.audio('music2','sfx/music2.ogg');
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	
	create: function(){
		game.state.start('menu');
	}
};
