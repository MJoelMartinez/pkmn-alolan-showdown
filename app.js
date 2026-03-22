const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}

Add_Custom_Style(`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    .leftbar, .rightbar {
        background: none;
        border: none;
        color: #ffffff;
        text-shadow: #000000 1px 1px 0, #000000 1px -1px 0, #000000 -1px 1px 0, #000000 -1px -1px 0;
    }

    .battle-controls, .innerbattle {
        font-family: "Roboto", sans-serif;
    }
    
    .backdrop {
        background-image: url('https://raw.githubusercontent.com/MJoelMartinez/pkmn-alolan-showdown/refs/heads/master/images/bg-01.png');
    }

    .statbar strong {
        text-align: left;
        padding-left: 20px;
        color: #FFFFFF;
        text-shadow: #000000 1px 1px 0, #000000 1px -1px 0, #000000 -1px 1px 0, #000000 -1px -1px 0;
    }

    .turn {
        background: none;
        border: none;
        color: #FFFFFF;
        text-shadow: #000000 1px 1px 0, #000000 1px -1px 0, #000000 -1px 1px 0, #000000 -1px -1px 0;
    }

    .hpbar {
        border: none;
    }

    .hp {
        background: #17fc24;
    }

    .movebutton {
        font-weight: bold;
        text-shadow: none;
        box-shadow: none;
        font-family: "Roboto", sans-serif;
    }

    .movebutton:hover {
        brightness(10);
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
`)