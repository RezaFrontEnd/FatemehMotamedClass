let player1 = ["sang","kaghaz","ghachi"]
let player2 = ["sang","kaghaz","ghachi"]
let result = 0
if(player1[0] == "sang" && player2[0]=="sang")
    { 
        result = 0
        console.log(`natije sang ba sang ${result} ast`)
        if(player1[0]== "sang" && player2[1]=="kaghaz")
        {
            result += 1
            console.log(`sang ba kaghaz natije ${result} ast`)
            if(player1[0]== "sang" && player2[2]=="ghachi")
            {
            result += 1
            console.log(`sang ba ghachi natije ${result} ast`)
            }
            if(result==2)
                {
                    console.log("shoma barande shodid")
                }
        }
        if(player1[1] == "kaghaz" && player2[2] =="ghachi")
            {
                result = 0
                console.log(`kaghaz ba ghachi natije ${result} ast`)
                if(player1[1]=="kaghaz" && player2[1]=="kaghaz")
                {
                    result = 0
                    console.log(`kaghaz ba kaghaz natije ${result} ast`)
                }
                if(player1[1]=="kaghaz" && player2[0] == "sang")
                    {
                        result += 1
                        console.log(`kaghaz ba sang natije ${result} ast`)

                    }
                if(result == 1)
                    {
                        console.log("shoma barande shodid")
                    }    

            }
            if(player1[2]=="ghachi" && player2[2] == "ghachi")
                {
                    result = 0
                    console.log(`ghachi ba ghachi natije ${result} ast`)
                    if(player1[2]=="ghachi" && player2[0] == "sang")
                    {
                        result = 0
                        console.log(`ghachi ba sang natije ${result} ast`)
                    }

                }
        
    } 
// hello change



