module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name',
    },
    description: {
      type: 'string',
      required: true,
      label: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      type: 'string',
      label: 'Author',
    },
  },
  completeMessage:
    "To get started with the Drees Starter Vue (Varia Stack) \n $ cd {{ destDirName }}\n $ yarn \n $ yarn serve \n\n For more information visit: https://bitbucket.org/dreeshomes/drees-starter-vue \n\r\n                                                                                                                                                                \r\n                                                                                                                                                                \r\n                                                                                                                                                                \r\n                                                                                                                                                                \r\n                                                                                                                                                                \r\n                                                  +##+#:                                                                                                        \r\n                                                 :######,                                                                                                       \r\n                                                 :\'\'\'++\'.                                                                                                       \r\n                                                 ;\';;:;\',                                                                                                       \r\n                                                 \'\';;,;\',                                                                                                       \r\n                                                `\'\';;,;\',                                                                                                       \r\n                                                ;;\';;,;\'\'                                                                                                       \r\n                                               ,;::,;.::;;                                                                                                      \r\n                                               :::,,;`,:;;`                                                                                                     \r\n                                               ;::,,;`,:;;.                                                                                                     \r\n                                              `\';,.,:`,,,;.                                                                                                     \r\n                                              .\';;:,, .;\'\',                                                                                                     \r\n                                              :\';;;:,`,;\'\':                                                                                                     \r\n                                              ;\';;;:,`,;\'\'\'                .;::,`                                                                               \r\n                                             `+\'#;::,`,;\'#\'              ,:;::::::,                                                                             \r\n                                             .+++;\'#\'##\';#;            `,::;::::::::                                                                            \r\n                                              \'#;\'##\'+##\'+;            .,::,,,,,::::;                                                                           \r\n                                             `;+;##\';;+#+\';           `,:::,.``.,:::\',                                                                          \r\n                                             .\';\'#+;,,;##\';    .:;;::..:::;,` `,:::\':;          .:::;:::,                                                       \r\n                                             ,\'\';;:,.`.;\'+;  ,;\'\'\'\'\'\'`,:::\'.` .,:::;;;:      `::;;;;;;;;;;:`                                                    \r\n                                             ,\';;;;:..:;++;`:;;\'\'\'\'\';.:;::\',``,::;;;;;\'     :;;\'\'\';::::;;;;;:                                                   \r\n                                             :\'\';;;:..:;++;,;;;\'\'\';;::;;\';:,.\',:;;\'\'\'\';;  .\';;\'\'\'\'\';;++::;;;;:                                                  \r\n                                             ;\';;;;:,.:;\'+\';;;;\'\'\';,\'\';\';;:,,:;;\'\'\'\'\'+,;;,+;;;;;\';;::\'+,::::;;:                                                 \r\n                                             ;\';;;;;,.:;\'+\';;;;\';;:#:+\'\';;:::;;\'\'\'#+++:;:;;;;;;;;;:,,;+.,,:::;;:                                                \r\n                                             \'\';;;;:,.:;\'+\';;;\';;;,.;+\'\'\';::;;\'\'\';\'++\';;;+;;;;;;;::,.,+..,,,:;;;,                                               \r\n                                            `\'\';;;::.,:;\'+\';;#+;;:,.;++;\'\':;;;;:::\'+#;\';;;;;;;;;;:,...+...,,::;;:                                               \r\n                                            .\'\';;:::.,;\'\'+\';\', ;::,.;++,,:::,,,,:;\'++`\';\';;;;;;;;:,.``+,..,,,:;;;,                                              \r\n                                            ,\'\';;:::.,;\'\'+\';;;;;::,##\'#:..```.,,:,+#\';\':\';;;;;;;::,,.`+;`.,,,::;;:                                              \r\n                                            :\'\';;;::,,;\'\'+\'#;;;;;:###;#\'..```.,:,+##.+;;\'\';;;;;:::,,...+.,,,,::;;;`                                             \r\n                                           `:\'\';;;::,,;\'\'+\'+;;;;;+#++;#+;.` ``:`+##;\'\'\'\'\'\'\';;;::::,,,,.,.,,,,::::;,                                             \r\n                                           :;\'\';\';::,:;\'\'+\':;;;;+#++++++\';``.::\'+#;:\'\'\'\'+:,\'::::,:,:,,:,\'.,,::::;;:                                             \r\n                                          `;;\'\';\':::,:\'\'\'+\'\':\';\'#+#+++;#+\';.:;\'\'#;;#;;\'\'\'.,;:::,,,::::::::\',,:::;;:                                             \r\n                                          .,;\'\';\';::::\'\'\'+\'\':;\'###\'#+++;++\',;;#\':\'#:;\'\'\'\'\';;::,,,,::::::::;:\'::;;;:                                             \r\n                                          ,:\':\';\';:::;\'\'\'+++:;\':##++#+++;\'\',;;:\'##;::;\'\'\';++\'\';,,,:::::::;;;;#;;;;:                                             \r\n                                          ;;\'.\';\';:;:;\';;:\'+;:\':+####\'++##\',;\'###::::\'\'\'\';#+#\'\'\'+;\';:::::;;;;+#+;;,                                             \r\n                                         .;;;.;;\';:;;;;..:\'+\':::;+###\'++#++\'\'+#+::::#\'\'\'\';+;;++;;;+\';\'\'::;;;;;##+;.                                             \r\n                                         .;\';`:;;;:;;:..,;\'\'\':.:,:;#+\'\'+#++++++:::;+#;\'\'\'\';,;\';;+::;;++\'\';;;;\'\'##\'                                              \r\n                                         .\';:`,;;;:;;,`,:;\'\'+:.:,:;\'+\';+++#++\':::;++;\'#++\',:;;\'#;:\'\'\';\'++\'#;;\'\'\'+\'                                              \r\n                                         .\';:`.\';;;;.`,:::\'\'+:,.:,;;+\':\'+#++;:::\'+\':;#+#\',.:;;;\'#+;:\'\'\';++\'#\';\'++:                                              \r\n                                          \'\',`.\';;;;,.,::;\';+;,,;:\'\'\'\';;\'+\'::::\'+;:\'+;++\',.:;;;;+#+#;;\'\';\'+\'##;+\'                                               \r\n                                          ;;,`.;;;;+`,\':::\'.;;+;;+:;:+\';;:::::++::+\':+++,,,::;\'#\'\'#+#+;+\'\';++#+\':                                               \r\n                                          ;;,..:\';;;,::;:,++;+;;:..:::\'\':::::++::+:,\'+\'\',,::\'\'\';;\'\'#+##;;\'\'++##;                                                \r\n                                          ;;:..;+\'\',:;;: +++;::;...,:::+;::;++::#,.;\';;\',.;,,,:;;\'\'++++#\';\'\'##\'`                                                \r\n                                          :;:.,:+\'\':;;;,:+\'+\';+.....,::,;;+::::\':`;:;;;:\';.\',::;;\'\'++++#+;+++;`                                                 \r\n                                          ;\':,,;+\'\':;;; +\'\'\'\';:,..,,,,::::;::::+`:;:;;,,...;,::;\'\'\'++++\';:,`                                                    \r\n                                          ;\';,,;++\';;;;.++\'\'++:,,,,,,,,::;::;:+..::;;:,....,\':;;\'\'+++\':                                                         \r\n                                          ;;;::;++\';;;\'\'++\'\'+#;::,,,,,;;\'\'::::+`::;;:,.....,,+;\'\'+\'\';,                                                          \r\n                                          :;;;:;++\'\'\'\'.\'++\'\'\'#;;;::,,::;;;\'\'\';::::;;:,.,,,,,,,+\'++`                                                             \r\n                                          .;;;;\'+++\'\'\'`\'+\'\'\'\'\'\':;;;:,:::;;;\'\'\'\';;;;:,,.,,,,,,:;+\'\'                                                              \r\n                                          `\'\';;\'+++\'\'+:,+;\'\';,   :;;:\';:::;;;;\'\'\';;:,...,,,,:;\'\':                                                               \r\n                                           \'\'\';\'+\'\'::\'+:\'\'\';      ,;;;\';:::::,,;\'\':,....,,,:;\'\';                                                                \r\n                                           \'\'\'\'+ #\'\'\'+\'\'\';`        .;;+\';:::,,`.,;:,.`..,,:;\'\';                                                                 \r\n                                           \'\'\'\'\'  ,\'\'\'\';.           .;;+\';;,,,,..,,....,,:;\'\';.                                                                 \r\n                                           :\'\'+                      .;\'+\';:,,:,.......,:;\'\';:                                                                  \r\n                                           `;\';                       ,;\'+\';:,,:,#...,,:;\'\'\'\'.                                                                  \r\n                                            \'\'                         ,;\'+\';:::#++:,,,:\'\';:+                                                                   \r\n                                            .                           :\'++\';;\'+\'++\',:;\';\'::                                                                   \r\n                                                                         ;\'++;;#+++++\'\'\';\';;`                                                                   \r\n                                                                          \'\'+\';+##+#+#\'\'\'\';:                                                                    \r\n                                                                           \'\'\',+###+++#+\';:;                                                                    \r\n                                                                           .\'\';\'++\'+#+\'\';;::                                                                    \r\n                                                                           .\'\'\';\'\'#\'\'\'\'\';;::`                                                                   \r\n                                                                           ;;\'\';;\'\'\'\'\'\';;;;:,                                                                   \r\n                                                                           ;:;\';;\'\'\'\'\'\'++##+;                                                                   \r\n                                                                          .;\';\'\'\'\'\'\'\'++++\'\'\'+,                                                                  \r\n                                                                          ::;;+;\'\'\'++++++\';;:;                                                                  \r\n                                                                          :;\'\'+\'\'\'++##++\';;;:,`                                                                 \r\n                                                                        `::;\';#\'++++#++\';;;;;:,                                                                 \r\n                                                                      `;;::;;;;##+++++\'\';;;;;;:.                                                                \r\n                                                                    `,,;+,:;;;+++++++\'\'\'\';;;;;;:.                                                               \r\n                                                                   ,,:\'\'+,:;;\'+++++++\'\'\'+:::;;;:,                                                               \r\n                                                                 .,:;;;#+::;;+++\'\'++\'\'\',+::::;;;:`                                                              \r\n                                                               `,,:;;;+++:::\'+++\'\'+\'\'\':+\';,:::;;:,                                                              \r\n                                                              .,,:;\';\'#++:::+++\'\'\'\'\'\':++:,;,::;;;:                                                              \r\n                                                             ,,::;\'\';+#++:::++\'\'\'\'\'\':##:,,,.,::;;:                                                              \r\n                                                            ,,::;;;\'\'#++#;::+++\'\'\'\'\'+#:,,,,#,,:;;:`                                                             \r\n                                                          `,,:::;\';:\'++##+::\'++\'\'\'\':+:,,.,,,++:;;+,                                                             \r\n                                                         `,::::;\':::\'++#++::;++\'\'\'\'\'\':,,..,:::+++;,                                                             \r\n                                                        :,::::;:,:::\'+#++#;::++\'\'\';#:,,...,,:::\'\';:                                                             \r\n                                                       .,:::;\',,,,::;+++###;:\'+++\';;:,,...,::::;\';:                                                             \r\n                                                      `::::;;,,,,,:::+++###\';;+++\';+::,...,,:::;\';:                                                             \r\n                                                      ::::;;\',,,,,,::++#####;;\'++\';\'::,...,::::;\';:                                                             \r\n                                                     :::;;;::,,,,,:::++++####;;++\';:::,.`..,::;;\';:                                                             \r\n                                                    ::::;;;;,,,,,,,::\'++#####++++\';:::,..`,,::;;\';:                                                             \r\n                                                   .:::;;;\',,,,,,,,:::++++##+##+++\';\':,.`..,::;;\';:                                                             \r\n                                                  `;::;;;\',,,,,,,,,:::++++++#+++++\';\':,.``.,::;\'\';,                                                             \r\n                                                  ;::;;:\',,,,,,,,,:::;;++++++++\'++\';::,.``.,::;\'\';                                                              \r\n                                                 ;::;;:;,,,,,,,,,,:::;;;+++\'``  \'+\';;:,.``.,::;\';:                                                              \r\n                                                ,;::;::,,,,,,,,,,::::;;;;;`     .+\';;\',.``.,::;\';:                                                              \r\n                                       :        ;::;::,,,,,,,,,:::::;;;;:    .`  +\'\';:,,``.,::;\';`                                                              \r\n                                       :.      ;;:;::,,,,,,,,:::::;;;;:.     ..```:\';;:,.`.,::;\':                                                               \r\n                                       :;     ,;:::;,,,,,,,:::::;;;;::        ;.````.:\',.`,,::#+:                                                               \r\n                                       :;:    \';;;;,,,,,,,::::;;;;;:          ,;..``..,:,`.,:;#+`                                                               \r\n                                       :;;.  \';;;\',,,,,,,:::;;;;;,             ;;.....,::;;\';##;:.                                                              \r\n                                       :;;;  \';\'\':,,,,,::::;;;;`               .;;.....,,:;;\'#+\';\':,`                                                           \r\n                                       ,;;;: .\';:,,,,,:::;;;;,                  ;;;.....,,:;;;\'\';\';;:,`                                                         \r\n                                       .;;;;:+#::,,,,:::;;;,                     ;;;.....,:::;\'\'\',,:;;:,                                                        \r\n                                       `;;;;,###:,,:::;;;`                       ,;;;...,,,::;\';\',``:;;::                                                       \r\n                                        ;;;;:,+##::::;++.                         ;;;;..,,,,,:\';;,``.:;;;:                                                      \r\n                                        ;;;;;:;@##\'+#+\'\';.                         ;;;;,,,,,,,+;;,...,:;;;:                                                     \r\n                                        ,;\'\';;;\'##+\';\'\'\'\',                          ;;;;,,,,,,\'::,,,,,,:;;;:                                                    \r\n                                         ;;\'\';;;+;;;\'++\';:,                          ;;;;,,,,,;::.,,,,,,:;;:.                                                   \r\n                                         ,;\'\'\'\'+;\';+;::;\';:`                          ;;;;:,,,:::,,,,,,,:;;;:                                                   \r\n                                          ;;\'\'\';;+:,:::;\'\':,                           ;;;;;,:::;,,,,,,,,:;;;:                                                  \r\n                                          ,\'+\'\'\'+:,,:::;\'\';:                            ;;;;\'\'::\',,,,,:\'+\'\'\'\';`                                                 \r\n                                           ;;\'\'\';:,,:::;\'\';;                            :;;\'++;:\',,,\':,:::;\'\'\';                                                 \r\n                                           :\'+\'\';:,.,::;\'\';;                             :\'\';\'\'\'::\',:::::::;\'\'\'.                                                \r\n                                            ;;;;;;,,::;;\'\'::                             ::;\'\'\'++\':::::::::;\'\'\';                                                \r\n                                            ;;;;\';:::;;\'\'\'\'`                              ;:;\'\'\';\'\':::::::::;\'\';.                                               \r\n                                            :;;;\';;;;;\'\'\'\'\'                               `::;;+\';+::::::::::\'\'\';                                               \r\n                                            `;;\';\'\';;\'\'\'\';;                                .::;+\'\'\'\':;:::,,::;\'\';.                                              \r\n                                             ;;\'\';\'\'\'\'\'\'\';:                                 .::+\'\'\'\'\';;:::,,::;\'\';                                              \r\n                                             ;;\'\'\'\'\'\'\'\'\'\'\'`                                  `:\';\'\'\'\';;::::,:::\'\';                                              \r\n                                             :;\'\'\'\'\'\'\'\'\';\'                                     ;;;\'\'\'\';;;;:,,,:;\'\';                                             \r\n                                             .;\'\'+\'\'\'\'\'\';;                                      :;;\'\'\'\';;;::,,::\'\';                                             \r\n                                             `;\'\'\'\'\'++\'\'\'                                        `;;\'\'\'\';;:::,,:;\'\';                                            \r\n                                              ;\'\'\'\'\'++\';\'                                          ;;\'\'\'\';;:::,,:;\'\',                                           \r\n                                              ;\'\'\'\'+++\'\'                                            ;;\'\'\'\';::::,,:\'\';                                           \r\n                                              ;\'\'+\'+++\';                                             ,;;\'\'\';:::,,,;\'\';                                          \r\n                                              ;\'\'++++\'\'`                                              `;;\'\'\';:::,,:;\'\',                                         \r\n                                              ;\'+++++\'\'                                                 ;;\'\'\'\':::,,:\'\';                                         \r\n                                              ;\'+\'\'++\'\'                                                  ;;\'\'\'\':::,,:\'\';                                        \r\n                                         .    ;\'+\'+++\'\'                                                   :;\'\'\'\':::,,:\'\';                                       \r\n                                         ,    ;\'+\'\'++\';                                                    .;\'\'\'+:::,,,\'\':                                      \r\n                                         ,,   \'\'\'\'\'++\';                                                     `;\'\'\'+:::,:,\'\':                                     \r\n                                         ,,` `\'\'+++++\';                                                      `;\'\'\'\':::\',,\'\':                                    \r\n                                         ,,, ,\'\'+\'+++\'\'                                                       .;\'\';;::\',,,\'\':                                   \r\n                                         :,,.,\'\'+\'\'++\';`                                                       .;\'\';::\'.,,,\'\';                                  \r\n                                         ;,,, ++\'\'\'++\';,                                                        ,;\'\';:\':.,,,\'\';                                 \r\n                                         ;.,,,;+\'\'\'++\'\'.                                                         :;\'\'\'\';:,,::\'\';`                               \r\n                                         ;:,,,\'+\'\'\'\'++\'                                                           ;\'\'\'\';;,,,::\';\'    `                          \r\n                                         ;\',,:,#\'\'\'\'++,                                                            ;\'\';;;;,,:::##`  ;                           \r\n                                         :#,,:::#\'\'\'++   ,                                                          ;\';;;;;,,:::   ;;                           \r\n                                       `,,;\',:::+\'\'+++::;`                                                          ,;;;\'\'\';,:::: ;;;                           \r\n                                      .,,::#,::::#\'+;;;;`                                                            ;;;\'\'\'\';,:::;;\':                           \r\n                                     ,,,,,:;::::::\'\';;;                                                              :;\'\'++++;,::;;\'                            \r\n                                    ,.,.:::;+::::;;\';\'\',                                                             ;;+\'\'\';;+:::;;;                            \r\n                                   :..,:::;;#:::\';;\'\'\'\'\'                                                             ;;\'\'\';;:;+,::;:                            \r\n                                  ;.,:::;;;;\';:+\';;;\';;\'                                                             ;;\'\';;;:;\'\':::\'                            \r\n                                .,.,:;;\'++####+\';;;;;;;;                                                             :;\'\';;;:;;+\'::\',                           \r\n                             ``,`,,::;;;;;;;;:::,,:;;;;;`                                                            ,;\'\';;;:;;\'+:;\';                           \r\n                           ``...:,,,::;;;;;;\'.`,,:;:;;;;.`````````````````````````````````````````````````````       `;\'\';;:,;;;++\'+\',                          \r\n                        ````.::.......,,::::,.:;:::;;;;:,```````````````````````````````````````````````````````````` ;\'\';;:,;;;#+++;:                          \r\n                     ``````,,.,::;;;::;;;;;;,::;\'##\'\';;;::,,,.........````````````````````````````````````````````````;\'\';;:,\'+;;\'\'\'::                          \r\n                    ```````:\';::::::;;;;;\'\'++++\'\'\';;::,,............`````````````````````````````````````````````````,\';;\'\'\'+;;;;;;\'::`                         \r\n                      ```````.....,,,,,::::::::::,,,....`````````````````````````````````````````````````````````````,:;;;\'\'\'\';;;;;::;.```                      \r\n                          ```````````................````````````````````````````````............```````````````````:,:;\'\'\'\'\'\'\';;;;;;:```````                   \r\n                            ```````````````````````````````````````````````````````................................,,::;\'\'\'+\'\';;;;;;:```````````                \r\n                                  ``````````````````````````````````````````````````````````.................,,,,,,:,;;:::::;;\'\';;;....``````````               \r\n                                             `````````````````````````````````````````````````````````````......,,,:,;:,,,;:;\'\';,..:\';:..```````                \r\n                                                                              ``````````````````````````````````..,::,,,,.,::::,,\'#;,.`````                     \r\n                                                                                                                ```:\'\';::::;;:,`                                \r\n                                                                                                                                                                \r\n                                                                                                                                                                \r\n                                                                                                                                                                \r\n",
  skipInterpolation: ['src/**/*.vue', 'node_modules/**'],
}