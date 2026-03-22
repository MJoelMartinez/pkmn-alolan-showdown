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
    }

    .battle-controls, .innerbattle {
        font-family: "Roboto", sans-serif;
    }
    
    .backdrop {
    }

    .movebutton {
        font-weight: bold;
        text-shadow: none;
        box-shadow: none;
        font-family: "Roboto", sans-serif;
    }

    .type-Normal {
        background: none !important;
        border: none !important;
    }

    .type {
        opacity: 0;
    }

    .pp {
        color: #000000 !important;
        font-weight: bold;
    }

    .megaevo {
        border: none;
    }
`)