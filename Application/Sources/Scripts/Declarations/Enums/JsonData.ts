export enum JsonData {

    MENU = `
        {
            "tag" : "div", 
            "text": "",
            "classes" : ["component", "menu"],
            "child" : 
            [
                {
                    "tag" : "div",
                    "text": "",
                    "classes" : ["overlay"],
                    "child" : [] 
                } , {
                    "tag" : "ul",
                    "text": "",
                    "classes" : ["list"],
                    "child" : 
                    [
                        {
                            "tag" : "li",
                            "text": "",
                            "classes" : ["item"],
                            "child" :
                            {
                                "tag" : "button",
                                "text" : "field",
                                "classes": ["field"]
                            }
                        }
                    ]
                }
            ]
        }
    `,
}