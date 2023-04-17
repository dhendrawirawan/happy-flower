let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . 5 5 5 . 5 5 . . 5 5 . . . . 
    . . . 5 5 . 5 5 . 5 5 . . . . . 
    . . . 5 5 5 5 5 . 5 5 . . . . . 
    . . . . 5 5 e e 5 5 5 . . . . . 
    . . 5 5 5 e e e e 5 5 5 5 . . . 
    . 5 5 5 5 e e e e 5 5 5 . 5 . . 
    . . . . 5 5 e e 5 . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 . 5 5 . 5 5 5 . . . . 
    . . 5 5 . . 5 5 . . 5 5 . . . . 
    . . . . . . 5 . . . . 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d . . . . . . . . . . 
        . . . . d d . . . . . . . . . . 
        . . . . . d . . . . . . . . . . 
        . . . . . f f 5 . . . . . . . . 
        . . b b 5 f f 5 5 . . . . . . . 
        . . . b 5 5 f 5 5 . . . . . . . 
        . . . . . 5 f 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 5000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
