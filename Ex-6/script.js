function Retrievedata()
            {
                var xhttp = new XMLHttpRequest(); 
                xhttp.onreadystatechange = function() 
                {
                    if (this.readyState == 4 && this.status == 200)                                          
                    {
                        document.getElementById("result").innerHTML = this.responseText; 
                    }
                };
                xhttp.open("GET", "file.txt", true); 
                xhttp.send(); 
            }