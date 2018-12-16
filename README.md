## Access server
- Open termial on linux, in window os, use Puty to ssh to server
- Command
    ```
    ssh root@206.189.147.62
    ```
- Enter password qwerty,./
- Go to project folder
    ```
    cd /var/www/devesigns-landingp-page
    ```
- Edit file with command 
    ```
    vi filename
    ```
- After editing file, save file, run this command to update restart server
    ```
    pm2 restart 0
    ```