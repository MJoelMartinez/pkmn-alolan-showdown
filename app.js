const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

try {
    const header = document.getElementsByClassName('inner')[0];

    let cssLock = 0;
    let randomBg = Math.floor((Math.random() * 9) + 1);

    const observer = new MutationObserver((mutationList) => {
        mutationList.forEach((mutation) => {
            if (mutation.addedNodes.length){
                let route = window.location.pathname;
                let pathlocation = route.indexOf('battle');

                if(pathlocation === 1 && cssLock != 1){
                    Add_Custom_Style(`
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

                        .leftbar, .rightbar {
                            background: none;
                            border: none;
                            color: #ffffff;
                            text-shadow: #000000 1px 1px 0, #000000 1px -1px 0, #000000 -1px 1px 0, #000000 -1px -1px 0;
                            width: 104px;
                            background-repeat: no-repeat;
                        }

                        .turn {
                            top: 0;
                            color: #ffffff;
                            background: linear-gradient(to bottom, #07293f, #00566e);
                            outline: 4px solid rgba(0, 86, 110, 0.60);
                            height: 24px;
                            border: none;
                            border-radius: 0;
                            border-bottom-left-radius: 5px;
                            border-bottom-right-radius: 5px;
                            padding-top: 6px;
                        }

                        .leftbar {
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/bg-trainer-near.png');
                            object-fit: none;
                            object-position: top center;
                        }

                        .rightbar {
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/bg-trainer-far.png');
                            object-fit: none;
                            object-position: top center;
                        }

                        .battle-controls, .innerbattle {
                            font-family: "Roboto", sans-serif;
                        }
                        
                        .backdrop {
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/bg-` + randomBg + `.png') !important;
                        }

                        .trainer {
                            top: 10px;
                        }

                        .trainersprite {
                            width: 40px !important;
                            height: 40px !important;
                            position: relative;
                            top: 11px;
                        }

                        .trainer-far .trainersprite {
                            right: -32px;
                        }

                        .trainer-near .trainersprite {
                            left: -32px;
                        }

                        .trainer div.teamicons {
                            width: fit-content;
                            display: grid;
                            position: relative;
                            top: -10px;
                            align-content: center;
                            margin-top: 60px;
                            left: unset;
                        }

                        .trainer-far .teamicons {
                            left: 70px !important;
                        }

                        .trainer strong {
                            text-shadow: none;
                        }

                        .trainer-far strong {
                            padding-left: 4px;
                        }

                        .trainer-near strong {
                            padding-right: 4px;
                        }

                        .statbar strong {
                            text-align: left;
                            padding-left: 20px;
                            color: #FFFFFF;
                            text-shadow: #000000 1px 1px 0, #000000 1px -1px 0, #000000 -1px 1px 0, #000000 -1px -1px 0;
                            font-family: "Roboto", sans-serif;
                            padding-top: 5px;
                        }

                        .statbar {
                            width: 174px;
                            height: 66px;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/bg-bar-player.png');
                            padding: 0;
                            font-size: 16px;
                            font-weight: lighter;
                        }

                        .statbar strong small {
                            font-weight: bold;
                            right: 26px;
                            position: absolute;
                            top: 7px;
                        }

                        .statbar .status {
                            padding-top: 6px;
                            font-weight: bold;
                        }

                        .messagebar {
                            background: linear-gradient(to bottom, #00566e, #07293f);
                            outline: 4px solid rgba(0, 86, 110, 0.60);
                        }

                        .hptextborder {
                            opacity: 0;
                        }

                        .statbar .hpbar {
                            margin: 0;
                            padding: 0;
                            border: 2px solid #000000;
                            background: #000000;
                            border-radius: 5px;
                            border-top-right-radius: 2px;
                        }

                        .statbar .hpbar .hp {
                            background: linear-gradient(to right, #9ce930, #00d914);
                            height: 8px;
                            border: none;
                            border-radius: 5px;
                            border-top-right-radius: 2px;
                        }

                        .statbar .hpbar .hp-yellow {
                            background: linear-gradient(to right, #fcb42e, #fef622); 
                        }

                        .hp .hp-yellow.hp-red {
                            background: linear-gradient(to right, #d31919, #f5d538); 
                        }
                        
                        .statbar .hpbar .prevhp {
                            background: #000000;
                            border-radius: 0;
                        }

                        .statbar .hpbar .hptext {
                            background: none;
                            text-shadow: #000000 1px 1px 0, #000000 1px -1px 0, #000000 -1px 1px 0, #000000 -1px -1px 0;
                            font-size: 12px;
                            font-weight: bold;
                            top: -3px;
                        }

                        .movebutton {
                            font-weight: bold;
                            text-shadow: none;
                            box-shadow: none;
                            font-family: "Roboto", sans-serif;
                        }

                        .movebutton:hover {
                            filter: brightness(130%);
                        }

                        .type {
                            opacity: 0;
                        }

                        .pp {
                            color: #ffffff !important;
                            font-weight: bold;
                            padding-right: 14px;
                        }

                        .megaevo {
                            border: none;
                        }

                        .moveselect, .switchselect {
                            height: 0;
                            opacity: 0;
                        }

                        .movebutton:disabled {
                            opacity: 50%;
                            border-radius: 30px;
                        }

                        .switchmenu button {
                            border: none;
                            border-radius: 0;
                            background: none;
                            box-shadow: none;
                            text-shadow: none;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/bg-switch.png');
                        }

                        .switchmenu button:hover {
                            filter: brightness(130%);
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/bg-switch.png');
                        }

                        .switchmenu button .hpbar {
                            border: 1px solid #000000;
                            background: none;
                            border-radius: 0;
                            left: 4px;
                        }

                        .switchmenu button .hpbar span {
                            height: 1px;
                            background: linear-gradient(to right, #62deb6, #12d32a);
                            border-radius: 0;
                        }

                        .switchmenu button.disabled {
                            border-top-right-radius: 16px;
                            border-bottom-left-radius: 16px;
                            opacity: 80%;
                        }

                        .movemenu, .switchmenu {
                            padding-top: 14px;
                        }

                        .type-Normal {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-normal.png') !important;
                        }

                        .type-Grass {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-grass.png') !important;
                        }

                        .type-Water {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-water.png') !important;
                        }

                        .type-Fire {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-fire.png') !important;
                        }

                        .type-Electric {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-electric.png') !important;
                        }

                        .type-Steel {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-steel.png') !important;
                        }

                        .type-Ghost {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-ghost.png') !important;
                        }

                        .type-Poison {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-poison.png') !important;
                        }

                        .type-Rock {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-rock.png') !important;
                        }

                        .type-Ground {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-ground.png') !important;
                        }

                        .type-Flying {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-flying.png') !important;
                        }

                        .type-Bug {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-bug.png') !important;
                        }

                        .type-Fighting {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-fighting.png') !important;
                        }

                        .type-Ice {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-ice.png') !important;
                        }

                        .type-Psychic {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-psychic.png') !important;
                        }

                        .type-Dark {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-dark.png') !important;
                        }

                        .type-Dragon {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-dragon.png') !important;
                        }

                        .type-Fairy {
                            background: none;
                            border: none !important;
                            background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/move-fairy.png') !important;
                        }
                    `)
                    cssLock = 1;
                    observer.disconnect();
                }
                
            }
        })
    });

    observer.observe(header, { childList: true });

} catch (err) {
    console.log(err.message);
}