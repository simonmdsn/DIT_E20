Exercise: a local webserver
---------------------------

- Install Docker https://docs.docker.com/get-docker/

- Start a nginx web server in Docker container. In this folder just run:

  ```
    docker-compose up
  ```

- Open a browser and visit your local webserver on

  >   http://localhost:8080/

  The port 8080 is specified in `docker-compose.yml`

- The webserver serves files from the current directory.

  Put a few other files in here (a small image, a text file, ...)
  + confirm that you can load them from your browser.

Added a image file: `mail_logo.png`


Exercise: a manual request with telnet
--------------------------------------

- Enable/install the `telnet` client on your machine.

  >    Win10: https://www.technipages.com/windows-10-enable-telnet
      
  >    Mac+Linux: already installed?


- Write an HTTP GET request by hand:

  ```
   $ telnet
   ...
   > open localhost 8080
   ...
   GET /index.html HTTP/1.1
   Host: localhost:8080
   (press return twice for an extra blank line)
  ```
Used `wsl` for this. 
Commands were in the following order:

  ```sql
  telnet

  open localhost 8080

  GET /index.html HTTP/1.1
  Host: localhost:8080
  ```


  (You can also omit the `open`-line if you simply run `telnet localhost 8080`)   

  Do you get a `200 OK` response? Why/why not?

We do get a `200 OK`, because of the chain of commands.

- Can you request the small image from earlier?

Yes. With:

  ```sql
  telnet

  open localhost 8080

  GET /mail_logo.png HTTP/1.1
  Host: localhost:8080
  ```

  Returns the following:

```
HTTP/1.1 200 OK                                                                                                         Server: nginx/1.19.2                                                                                                    Date: Tue, 01 Sep 2020 14:59:31 GMT                                                                                     Content-Type: image/png                                                                                                 Content-Length: 1388                                                                                                    Last-Modified: Tue, 01 Sep 2020 14:45:09 GMT                                                                            Connection: keep-alive                                                                                                  ETag: "5f4e5e75-56c"                                                                                                    Accept-Ranges: bytes                                                                                                                                                                                                                            PNG                                                                                                                                                                                                                                            IHDR   d               pHYs    +   HRM  z%        X  :  oZ  IDATxmlSUctZՑ$>ljFJe>x̦SRۇ   AlDIgcb2/R/hjF6t[[{|xO99|蕜y9uιz.gFځr`;ϸJƞڀ^ 0CAv                                                                              Aֺ9ފh)Pr6dXpR)ge6,K^ဳm2x_E0rra#PS-HH. [cm4x7dץsM+C[-kN)Y/ۀO                                 Y(XzQ<њ5?u;-(/ׁ-iu̝,7eaO8<                                                                                         ĥHWF~KW,Yye=f8@#mesvRp\WMYW [],`\m      y,{,}2?[p\քIr                                                          `y1 ɲ%Hp\]HY:SY1wO]RUiS"rS9.V\[Z|;GT>?8rAvϔқUv>{9                                                         |j>fo@9g{dG,Y.Wb+ =->>k6VgfQￏd+h;Y?LT]S@V                                                              ߕ(mz Yc]k_!>٪(4dnx\ϔ`                                                                                          EǦSஎ3>Y;P~ܬ418*'oC51Lrysg#vܖz[uG^Jw=sw)]wM)t@e juC{[)Lҗ[.APߠ`Vh,)nygpd"՛lsȖ ) b5& $VÁ=25TJ=p; 楌%|0L:c,ìFyZѭoNň!5z2[WTА뼔)kTMET                                                                                   R~-:W(ڞ3HgTTrw;Rd1^:g_T+5; *Fd2    IENDB`
```

- Windows users: the telnet on Windows is slightly broken.

  * If the screen is not clearing so you overwrite any previous
    characters, this is a known issue:

     > https://learningpassion.wordpress.com/2013/11/10/http-request-via-telnet/

  * If you cannot see what you are typing, an escape code
    (`Ctrl + ]`) followed by `set localecho` and `Enter` may fix it as
    explained here:

     > https://stackoverflow.com/questions/1098503/how-to-unsupress-local-echo



Exercise: make HTTP requests with `curl`
----------------------------------------

`telnet` can be easy for checking basic connectivity.

For a more powerful tool, `curl` is a good option.


- Install the `curl` program on your machine
    (again: it may already be installed)

- Run `curl` from the command line to request pages from your webserver:

  ```
    $ curl -v localhost:8080/file.html
  ```

  (The `-v` option -- for verbose -- prints both
  the underlying request and response headers)

`curl -v http://localhost:8080` returns the following

```
StatusCode        : 200
StatusDescription : OK
Content           : <!DOCTYPE html>
                    <html>
                      <head>
                        <title>Nginx is working</title>
                      </head>
                      <body>
                        <h1>Hurra!</h1>
                        <p>
                          Nginx is up and running in a Docker container!
                    <br/>
                        </p>
                      </body>
                    </html>
                    ...
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Accept-Ranges: bytes
                    Content-Length: 200
                    Content-Type: text/html
                    Date: Tue, 01 Sep 2020 15:04:40 GMT
                    ETag: "5f4e2954-c8"
                    Last-Modified: Tue, 01 Sep 2020 1...
Forms             : {}
Headers           : {[Connection, keep-alive], [Accept-Ranges, bytes], [
                    Content-Length, 200], [Content-Type, text/html]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 200
```


- Study the headers. How much do they reveal?

The headers of the requests are isolated with `(curl -v http://localhost:8080).headers`. This returns the following:

```
Connection     keep-alive
Accept-Ranges  bytes
Content-Length 200
Content-Type   text/html
Date           Tue, 01 Sep 2020 15:06:22 GMT
ETag           "5f4e2954-c8"
Last-Modified  Tue, 01 Sep 2020 10:58:28 GMT
Server         nginx/1.19.2
```

- Make a `curl` request to https://icanhazdadjoke.com/ with the HTTP
  request header `Accept: text/plain` to tell the server that you
  would like a plain text response.

  Compare the response to what you get when sending the header
  `Accept: text/html`.

With the header `Accept: text/plain` https://icanhazdadjoke.com returns
```
Sometimes I tuck my knees into my chest and lean forward.  That’s just how I roll.
```

With the header `Accept: text/html` https://icanhazdadjoke.com returns the full HTML DOM.

- Make `curl` perform an HTTP HEAD request   
  (this asks the server to only send response headers - but no data).

The command `curl --head https://icanhazdadjoke.com/` returns

```
HTTP/2 200                                                                                                              date: Tue, 01 Sep 2020 15:17:32 GMT                                                                                     content-type: text/plain                                                                                                content-length: 82                                                                                                      set-cookie: __cfduid=dd89c09cc1a6454e67a9a40e095b67cda1598973451; expires=Thu, 01-Oct-20 15:17:31 GMT; path=/; domain=.icanhazdadjoke.com; HttpOnly; SameSite=Lax                                                                               cache-control: max-age=0, must-revalidate, no-cache, no-store, public, s-maxage=0                                       x-frame-options: DENY                                                                                                   x-xss-protection: 1; mode=block                                                                                         cf-cache-status: DYNAMIC                                                                                                cf-request-id: 04ebd7b62b000010b9c93c8200000001                                                                         expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"                      strict-transport-security: max-age=15552000; includeSubDomains                                                          x-content-type-options: nosniff                                                                                         server: cloudflare                                                                                                      cf-ray: 5cbff569de4310b9-CPH  
```


Exercise: VS Code and HTML
--------------------------

- Install the VS Code editor  https://code.visualstudio.com/download
  and the Live Server extension  https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer 

- Write an HTML file in VS Code including the elements from the slides   

  Can you get the Live Server working like in this video? https://www.youtube.com/watch?v=T0SInJ7Eo8M


- Save the HTML file in this directory so that the nginx web server serves it.

- Check that you can view your page from your browser
