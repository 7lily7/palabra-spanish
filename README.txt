PALABRA · IMMERSIVE BARCELONA 3D WORLD

An upgraded visual layer on Palabra V4. Both earlier UI illustration concepts are retained as switchable perspective backdrops. The existing interactive GLB pig, wordbooks, reviews, audio player, tests, and local learning data are left in the original application's scripts.

UPLOAD TO GITHUB REPOSITORY ROOT:
 index.html  (replace)
 palabra-world.js  (new)
 scene-sunlit.png  (new)
 scene-mosaic.png  (new)

The following must already exist in the repo and must NOT be deleted:
 palabra-pig-barcelona.glb, pig-interactive.js, barcelona-pig.webp,
 sentence-listening.js, sentence-manifest.json, audio/, audio-manifest.json, sentence-audio/.

For convenience, this ZIP also includes the pig GLB, poster, and interaction JS, but there is NO NEED to upload them again if you already uploaded those files.

VISUALS: two themes, sunlit terrace vs mosaic fantasy plaza, with CSS perspective and depth, floating UI, Gaudi style architectural layers, interactive 3D pig. The background illustrations are 2D assets used in layered scenery, not fully modeled 3D geometry. The pig itself is an actual 3D GLB object.

FONTS/NETWORK: 3D viewer is loaded from Google CDN by the existing index.html; network connection required for viewer library. Scene images and model are hosted in your repo. Do not bypass browser malware/phishing warnings if your Pages domain is still blocked; submit security review first.

NOTE: This is a new full homepage, not a separate pig3d.html. Theme preference is stored under a NEW key 'palabra-ui-scene-v1', without overwriting learning records.
