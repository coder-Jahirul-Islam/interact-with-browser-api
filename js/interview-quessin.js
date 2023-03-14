







/* 
what is session storage?
*)Stores data in browser for a session 
*) Saves data in key/value pairs in the browser.

*)data is deleted when the browser closed. 
*) Data is not available for future sessions. 
*/




/* 
What is local storage?
*)Stores data in browser without any expiration date.
*)Saves data in key/value pairs in the browser.
*)Data is not deleted when the browser browser is closed
*)Data is available for future sessions.




**)local storage-parameters, Return value

parameters & desc                   Return value: type and desc
key Required.                  A String Anything is a string format
The name of a key.

value Required    
The value of the key.
*/













/* 
Cookies vs Local Strage vs session Storage

                            cookies                     local storage        session storage
1.Expires                   Manually set                Never                On tab close
2.Storage Location          Browser and server          Browser only         Browser only
3.Sent with REquests        Yes                         No                   NO
4.Capacity                  4kb                         10mb                 5mb
Browsers                    HTML5/HTML 5                HTML 5               HTML 5 

*/