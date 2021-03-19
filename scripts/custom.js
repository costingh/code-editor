/* ########################################################################
    ######################  Creates CodeMirror instance #######################
    ########################################################################### */  

    createInstance = () => {
        const firstEditor = document.querySelector('#htmlPanel');
        const secondEditor = document.querySelector('#cssPanel');
        const thirdEditor = document.querySelector('#javascriptPanel');

        let firstEditorMirror = CodeMirror.fromTextArea(firstEditor, {
            value: '<h1>Hello World!</h1>', 
            mode : "xml",
            htmlMode: true,
            lineNumbers: true,
            autoCloseTags: true,
            tabSize: 2,
            indentUnit: 2,
            indentWithTabs: true,
            showCursorWhenSelecting: true,
            undoDepth: 100,
            cursorHeight: 0.85,
            styleActiveLine: true,
            spellcheck: false
        });

        let secondEditorMirror = CodeMirror.fromTextArea(secondEditor, {
            lineNumbers: true,
            tabSize: 2,
            indentUnit: 2,
            indentWithTabs: true,
            autoCloseTags: true,
            showCursorWhenSelecting: true,
            undoDepth: 100,
            cursorHeight: 0.85,
            spellcheck: false,
            styleActiveLine: true,
            mode: 'css'
        });

        let thirdEditorMirror = CodeMirror.fromTextArea(thirdEditor, {
            lineNumbers: true,
            tabSize: 2,
            indentUnit: 2,
            indentWithTabs: true,
            autoCloseTags: true,
            showCursorWhenSelecting: true,
            undoDepth: 100,
            cursorHeight: 0.85,
            spellcheck: false,
            styleActiveLine: true,
            mode: 'javascript'
        });                
    }


    /* Creates the first instance on load for classic grid style */
    createInstance();


    /* Function for opening and closing settings menu */
    /* openSettings = () => {
        let settingsMenuContent = document.querySelector('.settings-menu');
        if(settingsMenuContent.style.display == "none") {
            settingsMenuContent.style.display = "block";
        } else {
            settingsMenuContent.style.display = "none";
        }
    } */


    $(document).ready(function(){
        $("#settings").click(function(){
          $(".settings-menu").toggle();
        });
      });

    /* Displaying grid styles dinamically (selected by user) */
    const gridModesIcons = document.querySelectorAll('.gridMode');

    const classicGrid = `<div class="content-fiddle">
                            <div data-role="splitter" class="h-100 content-fiddle">
                                <div data-role="splitter" class="h-100" data-split-mode="vertical">
                                    <div class="element" id="html">
                                        <div class="top-bar">
                                            <p id="name">HTML</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="htmlPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                    <div class="element" id="css">
                                        <div class="top-bar">
                                            <p id="name">CSS</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="cssPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                </div>
                                <div data-role="splitter" class="h-100" data-split-mode="vertical">
                                    <div class="element" id="javascript">
                                        <div class="top-bar">
                                            <p id="name">Javascript + No-Library (pure JS)</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="javascriptPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                    <div class="element">
                                        <p id="name">Result</p>
                                        <iframe id="outputPanel" class="d-flex flex-justify-center flex-align-center"></iframe>       
                                    </div>             
                                </div>
                            </div>
                        </div>`;
    const columnsGrid = `<div class="content-fiddle">
                            <div data-role="splitter" class="w-100 content-fiddle">
                                <div data-role="splitter" class="h-100">
                                    <div class="element" id="html">
                                        <div class="top-bar">
                                            <p id="name">HTML</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="htmlPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                    <div class="element" id="css">
                                        <div class="top-bar">
                                            <p id="name">CSS</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="cssPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                </div>
                                <div data-role="splitter" class="h-100">
                                    <div class="element" id="javascript">
                                        <div class="top-bar">
                                            <p id="name">Javascript + No-Library (pure JS)</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="javascriptPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                    <div class="element">
                                        <p id="name">Result</p>
                                        <iframe id="outputPanel" class="d-flex flex-justify-center flex-align-center"></iframe>       
                                    </div>             
                                </div>
                            </div>
                        </div>`;
    const bottomResultsGrid = `<div class="content-fiddle">
                                    <div data-role="splitter" class="h-100 content-fiddle" data-split-mode="vertical">
                                        <div data-role="splitter" class="h-100">
                                            <div class="element" id="html">
                                                <div class="top-bar">
                                                    <p id="name">HTML</p>
                                                    <div class="tidy">
                                                        <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                        <span>Tidy</span>
                                                    </div>
                                                </div>
                                                <textarea id="htmlPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                            </div>
                                            <div class="element" id="css">
                                                <div class="top-bar">
                                                    <p id="name">CSS</p>
                                                    <div class="tidy">
                                                        <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                        <span>Tidy</span>
                                                    </div>
                                                </div>
                                                <textarea id="cssPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                            </div>
                                            <div class="element" id="javascript">
                                                <div class="top-bar">
                                                    <p id="name">Javascript + No-Library (pure JS)</p>
                                                    <div class="tidy">
                                                        <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                        <span>Tidy</span>
                                                    </div>
                                                </div>
                                                <textarea id="javascriptPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                            </div>
                                        </div>                               
                                        <div class="element">
                                            <p id="name">Result</p>
                                            <iframe id="outputPanel" class="d-flex flex-justify-center flex-align-center"></iframe>       
                                        </div>             
                                    </div>
                                </div>`;
    const rightResultsGrid = `<div class="content-fiddle">
                                    <div data-role="splitter" class="h-100 content-fiddle">
                                        <div data-role="splitter" class="h-100">
                                            <div class="element" id="html">
                                                <div class="top-bar">
                                                    <p id="name">HTML</p>
                                                    <div class="tidy">
                                                        <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                        <span>Tidy</span>
                                                    </div>
                                                </div>
                                                <textarea id="htmlPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                            </div>
                                            <div class="element" id="css">
                                                <div class="top-bar">
                                                    <p id="name">CSS</p>
                                                    <div class="tidy">
                                                        <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                        <span>Tidy</span>
                                                    </div>
                                                </div>
                                                <textarea id="cssPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                            </div>
                                            <div class="element" id="javascript">
                                                <div class="top-bar">
                                                    <p id="name">Javascript + No-Library (pure JS)</p>
                                                    <div class="tidy">
                                                        <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                        <span>Tidy</span>
                                                    </div>
                                                </div>
                                                <textarea id="javascriptPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                            </div>
                                        </div>      
                                        <div class="element">
                                            <p id="name">Result</p>
                                            <iframe id="outputPanel" class="d-flex flex-justify-center flex-align-center"></iframe>       
                                        </div>             
                                    </div>
                                </div>`;
    const tabsColumnsGrid = `<div class="content-fiddle">
                                <div id="buttonContainer">               
                                    <div class="toggleButton active" id="html">HTML</div>                          
                                    <div class="toggleButton" id="css">CSS</div>                          
                                    <div class="toggleButton" id="javascript">JavaScript</div>
                                    <div class="space"></div>                                             
                                </div>
                                <div class="body-container">
                                    <div data-role="splitter" class="h-100">
                                        <div class="element visible" id="html">
                                            <div class="top-bar">
                                                <p id="name">HTML</p>
                                                <div class="tidy">
                                                    <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                    <span>Tidy</span>
                                                </div>
                                            </div>
                                            <textarea id="htmlPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                        </div>
                                        <div class="element" id="css">
                                            <div class="top-bar">
                                                <p id="name">CSS</p>
                                                <div class="tidy">
                                                    <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                    <span>Tidy</span>
                                                </div>
                                            </div>
                                            <textarea id="cssPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                        </div>
                                        <div class="element" id="javascript">
                                            <div class="top-bar">
                                                <p id="name">Javascript + No-Library (pure JS)</p>
                                                <div class="tidy">
                                                    <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                    <span>Tidy</span>
                                                </div>
                                            </div>
                                            <textarea id="javascriptPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                        </div>
                                        <div class="element d-block">
                                            <p id="name">Result</p>
                                            <iframe id="outputPanel" class="d-flex flex-justify-center flex-align-center"></iframe>  
                                        </div>
                                    </div>     
                                </div>
                            </div>`;
    const tabsRowsGrid = `<div class="content-fiddle">
                            <div id="buttonContainer">               
                                <div class="toggleButton active" id="html">HTML</div>                          
                                <div class="toggleButton" id="css">CSS</div>                          
                                <div class="toggleButton" id="javascript">JavaScript</div>
                                <div class="space"></div>                                             
                            </div>
                            <div class="body-container">
                                <div data-role="splitter" class="h-100"  data-split-mode="vertical">
                                    <div class="element visible" id="html">
                                        <div class="top-bar">
                                            <p id="name">HTML</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="htmlPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                    <div class="element" id="css">
                                        <div class="top-bar">
                                            <p id="name">CSS</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="cssPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                    <div class="element" id="javascript">
                                        <div class="top-bar">
                                            <p id="name">Javascript + No-Library (pure JS)</p>
                                            <div class="tidy">
                                                <img src="images/tidy-icon.png" alt="tidy" width="20px">
                                                <span>Tidy</span>
                                            </div>
                                        </div>
                                        <textarea id="javascriptPanel" class="d-flex flex-justify-center flex-align-center"></textarea>
                                    </div>
                                    <div class="element d-block">
                                        <p id="name">Result</p>
                                        <iframe id="outputPanel" class="d-flex flex-justify-center flex-align-center"></iframe>  
                                    </div>
                                </div>     
                            </div>`;
    
    gridType = (number) => {

        /* Icons blue background animation */
        for(let j = 0; j < gridModesIcons.length; j++) {
            gridModesIcons[j].classList.remove('active');
        }
        gridModesIcons[number].classList.add('active');


        /* Remove old grid style and replace it with new type (number is the index of grid) */
        const gridContainerDisplay = document.querySelector('#gridContainer');
        /* Classic Style */
        if(number == 0) {
            gridContainerDisplay.innerHTML = classicGrid;
        } else if(number == 1) {
            gridContainerDisplay.innerHTML = columnsGrid;
        } else if(number == 2) {
            gridContainerDisplay.innerHTML = bottomResultsGrid;
        } else if(number == 3) {
            gridContainerDisplay.innerHTML = rightResultsGrid;
        } else if(number == 4) {
            gridContainerDisplay.innerHTML = tabsColumnsGrid;
        } else if(number == 5) {
            gridContainerDisplay.innerHTML = tabsRowsGrid;
        }  

        createInstance();
        watchForChanges();
        tabsButtons(number);
        tidyCode();
    }


 /* ########################################################################
    #########################  SELECT THEME FUNCTION  #########################
    ########################################################################### */
    
    const firstInput = document.getElementById("first-editor-theme-option");
    const secondInput = document.getElementById("second-editor-theme-option");
    const thirdInput = document.getElementById("third-editor-theme-option");



    selectTheme = () => {               
        const editor = document.querySelectorAll(".CodeMirror");

        let firstTheme = firstInput.options[firstInput.selectedIndex].textContent;
        editor[0].CodeMirror.setOption("theme", firstTheme); 

        let secondTheme = secondInput.options[secondInput.selectedIndex].textContent; 
        editor[1].CodeMirror.setOption("theme", secondTheme); 
        
        let thirdTheme = thirdInput.options[thirdInput.selectedIndex].textContent; 
        editor[2].CodeMirror.setOption("theme", thirdTheme); 
    }

   /*  var firstChoice = (location.hash && location.hash.slice(1)) || (document.location.search && decodeURIComponent(document.location.search.slice(1)));

    if (firstChoice) {

        const editor = document.querySelectorAll(".CodeMirror");
        firstInput.value = firstChoice;      
        editor[0].setOption("theme", firstChoice);

        secondInput.value = secondChoice;
        editor[1].setOption("theme", secondChoice);

        thirdInput.value = thirdChoice;
        editor[2].setOption("theme", thirdChoice);                      
    } */

    CodeMirror.on(window, "hashchange change keyup paste", function() {
        var firstTheme = location.hash.slice(1);
        if (firstTheme) { 
            firstInput.value = firstTheme; 
            selectTheme(); 
        }
        var secondTheme = location.hash.slice(1);
        if (secondTheme) { 
            secondInput.value = secondTheme; 
            selectTheme(); 
        }
        var thirdTheme = location.hash.slice(1);
        if (thirdTheme) { 
            firstInput.value = thirdTheme; 
            selectTheme(); 
        }
    });


/* ########################################################################
########################  UPDATE OUTPUT FUNCTION   ########################
########################################################################### */


updateOutput = () => {
    let value = document.querySelectorAll(".CodeMirror");

    $("#outputPanel").contents().find("html").html("<html><head><style type='text/css'>" + value[1].CodeMirror.getValue() + "</style></head><body>" + value[0].CodeMirror.getValue() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval(value[2].CodeMirror.getValue());
}


/* Function that watches for changes in code editors */
watchForChanges = () => {
    let value = document.querySelectorAll(".CodeMirror");

    value[0].addEventListener('keyup', updateOutput);
    value[0].addEventListener('change', updateOutput);
    value[0].addEventListener('paste', updateOutput);
    value[1].addEventListener('keyup', updateOutput);
    value[1].addEventListener('change', updateOutput);
    value[1].addEventListener('paste', updateOutput);
}

watchForChanges();


/* Function for running code on button click */
runCode = () => {
    const runButton = document.querySelector('#runButton');

    runButton.addEventListener('click', (e) => {
        e.preventDefault();
        updateOutput();
    });
}

runCode();



/* Function for tabs buttons (tab panel) */
tabsButtons = (numb) => { 
    if(numb == 4 || numb == 5) {
        const btnContainer = document.querySelector('#buttonContainer');
        const htmlShowBtn = btnContainer.querySelector('#html');
        const cssShowBtn = btnContainer.querySelector('#css');
        const javascriptShowBtn = btnContainer.querySelector('#javascript'); 

        const panelContainer = document.querySelector('.body-container');
        const htmlContainer = panelContainer.querySelector('#html');
        const cssContainer = panelContainer.querySelector('#css');
        const javascriptContainer = panelContainer.querySelector('#javascript');


        const showBtns = [htmlShowBtn, cssShowBtn, javascriptShowBtn];
        const showContentFiddle = [htmlContainer, cssContainer, javascriptContainer];

        for (let i = 0; i < showBtns.length; i++) {
            showBtns[i].addEventListener('click', function () {
                for(let j = 0; j < showBtns.length; j++) {
                    showBtns[j].classList.remove('active');
                    showContentFiddle[j].classList.remove('visible');
                }
                showBtns[i].classList.add('active');
                showContentFiddle[i].classList.add('visible');

                if(!(document.querySelector('.CodeMirror'))) {
                    createInstance();
                }                    
            });
        } 
    }  
}

//Tidy
/* Auto format */
getSelectedRange = (editor) => {
    return { 
        from: editor.getCursor(true), 
        to: editor.getCursor(false) };
}



autoFormatSelection = (editor) => {
    let range = getSelectedRange(editor);
    editor.autoFormatRange(range.from, range.to);
}



tidy = (i) => {
    const editor = document.querySelectorAll('.CodeMirror');
    autoFormatSelection(editor[i].CodeMirror);
}



tidyCode = () => {
    const tidyBtns = document.querySelectorAll('.tidy');

    for(let i = 0; i < tidyBtns.length; i++) {
        tidyBtns[i].addEventListener('click', () => {
            tidy(i);
        });
    }
}


tidyCode();


//Checked and unchecked inputs
/* Function for handling inputs */
lineNumbers = () => {
    const x = document.querySelector('.lineNumbers');
    const input = x.querySelector('input');
    let value = document.querySelectorAll(".CodeMirror");

    if(input.checked) {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('lineNumbers', true);
        }
    } else {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('lineNumbers', false);
        }
    }     
}


wrapLines = () => {
    const x = document.querySelector('.wrapLines');
    const input = x.querySelector('input');
    let value = document.querySelectorAll(".CodeMirror");

    if(input.checked) {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('lineWrapping', true);
        } 
    } else {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('lineWrapping', false);
        }
    }
}


indentWithTabs = () => {
    const x = document.querySelector('.indentWithTabs');
    const input = x.querySelector('input');
    let value = document.querySelectorAll(".CodeMirror");

    if(input.checked) {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('indentWithTabs', true);
        } 
    } else {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('indentWithTabs', false);
        }
    }
}


autoCloseTags = () => {
    const x = document.querySelector('.autoCloseTags');
    const input = x.querySelector('input');
    let value = document.querySelectorAll(".CodeMirror");

    if(input.checked) {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('autoCloseTags', true);
        } 
    } else {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('autoCloseTags', false);
        }
    }
}

matchTags = () => {
    const x = document.querySelector('.matchTags');
    const input = x.querySelector('input');
    let value = document.querySelectorAll(".CodeMirror");

    if(input.checked) {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('matchTags', {bothTags: true});
            value[i].CodeMirror.setOption('extraKeys', {"Ctrl-J": "toMatchingTag"});
        } 
    } else {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('matchTags', false);
        }
    }
}



matchBrackets = () => {
    const x = document.querySelector('.matchBrackets');
    const input = x.querySelector('input');
    let value = document.querySelectorAll(".CodeMirror");

    if(input.checked) {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('matchBrackets', true);
        } 
    } else {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('matchBrackets', false);
        }
    }
} 


autoCloseBrackets = () => {
    const x = document.querySelector('.autoCloseBrackets');
    const input = x.querySelector('input');
    let value = document.querySelectorAll(".CodeMirror");

    if(input.checked) {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('autoCloseBrackets', true);
        } 
    } else {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('autoCloseBrackets', false);
        }
    }
} 


spellCheck = () => {
    const x = document.querySelector('.spellCheck');
    const input = x.querySelector('input');
    let value = document.querySelectorAll(".CodeMirror");

    if(input.checked) {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('spellCheck', true);
        } 
    } else {
        for(let i = 0; i < value.length; i++) {
            value[i].CodeMirror.setOption('spellCheck', false);
        }
    }
} 


indentSize = () => {
    const x = document.querySelector('#indent-size');
    const spaces = x.options[x.selectedIndex].text;
    let editor = document.querySelectorAll(".CodeMirror");
    let result = spaces.charAt(0)

    for(let i = 0; i < editor.length; i++) {
        editor[i].CodeMirror.setOption('tabSize', result);
    }
}


keyMap = () => {
    const x = document.querySelector('#key-map');
    const keyMaps = ["vim", "sublime", "emacs"];

    let editor = document.querySelectorAll(".CodeMirror");
    let valueNumber = x.options[x.selectedIndex].value -1;


    if(valueNumber == 0) {
        for(let i = 0; i < editor.length; i++) {
            editor[i].CodeMirror.setOption('keyMap', keyMaps[valueNumber]);
            console.log(keyMaps[valueNumber]);
        } 
    } else if(valueNumber == 1) {
        for(let i = 0; i < editor.length; i++) {
            editor[i].CodeMirror.setOption('keyMap', keyMaps[valueNumber]);
            console.log(keyMaps[valueNumber]);
        } 
    } else if(valueNumber == 2) {
        for(let i = 0; i < editor.length; i++) {
            editor[i].CodeMirror.setOption('keyMap', keyMaps[valueNumber]);
            console.log(keyMaps[valueNumber]);
        } 
    } 
}



setFontSize = () => {
    
    const x = document.querySelector('#font-size');
    const option = x.options[x.selectedIndex].text;
    const fontSizes = ["13px", "10px", "11px", "16px", "18px"];

    let editor = document.querySelectorAll(".CodeMirror");
    let valueNumber = x.options[x.selectedIndex].value -1;

    if(valueNumber == 0) {
        for(let i = 0; i < editor.length; i++) {
            editor[i].style.fontSize = fontSizes[valueNumber];
        } 
    } else if(valueNumber == 1) {
        for(let i = 0; i < editor.length; i++) {
            editor[i].style.fontSize = fontSizes[valueNumber];
        } 
    } else if(valueNumber == 2) {
        for(let i = 0; i < editor.length; i++) {
            editor[i].style.fontSize = fontSizes[valueNumber];
        } 
    } else if(valueNumber == 3) {
        for(let i = 0; i < editor.length; i++) {
            editor[i].style.fontSize = fontSizes[valueNumber];
        } 
    } else if(valueNumber == 4) {
        for(let i = 0; i < editor.length; i++) {
            editor[i].style.fontSize = fontSizes[valueNumber];
        } 
    }    
}

download = (filename, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("download-btn").addEventListener("click", function(){
    let fileExtension = '.html';
    let file = document.querySelector('#fiddle-name').value ;
    let filename = file + fileExtension;

    if(file === '') {
        const requiredLabel = document.querySelector('.required');
        requiredLabel.style.opacity = '1';
        setTimeout(() => {
            requiredLabel.style.opacity = '0';
        }, 2000);
        return;
    }

    let value = document.querySelectorAll(".CodeMirror");
    let description = document.querySelector('#description').value;

    // Clear the input field
    document.querySelector('#fiddle-name').value = ''; 

    // get content from all editors, and create a index.html file
    const text = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="description" content=${description}>

                <title>${filename}</title>
                <style>
                    ${value[1].CodeMirror.getValue()}
                </style>
            </head>

            <body>
                ${value[0].CodeMirror.getValue()}
                <script>
                    ${value[2].CodeMirror.getValue()}
                </script>
            </body>
        </html>
    `;
    download(filename, text);     
}, false);

