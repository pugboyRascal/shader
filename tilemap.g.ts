// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`280008000202020202020202020202020102020202010202020201010202020202020202020203020202020202020302020202020201020202020202020203020201020201010101010202020202020202020202020302020202030202020409090909090909090909090909090909090909090907010101010202020202020202020203020205080c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c080a0103020102020202020409090909090909080a02010202020202020202020202020101010101050a030101010202020202060c0c0c0c0c0c0c0c0b02010202020202020102020202020203020201060b010102010202020202020203020102020201020202020202020202020202010201020202020101010201010102020302020202020202020202020202020202020203020202020202020202020202020202020202020303`, img`
........................................
........................................
........................................
........................................
........................................
........................................
........................................
........................................
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
