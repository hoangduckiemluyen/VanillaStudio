export enum JsonData {

    MENU = `
        {
            "tag" : "div", 
            "classes" : ["component", "menu"],
            "content" : 
            {
                "tag" : "ul",
                "classes" : ["list"],
                "content" : 
                {
                    "tag" : "li",
                    "classes" : ["item"],
                    "content" :
                    {
                        "tag" : "button",
                        "classes": ["field"],
                        "text" : "field"
                    }
                }
            }
        }
    `,
}