**Backend Dependancies**
  - Java v.17 or greater
  - Apache Maven v.3.90

**Configuring Java Environment:**
  - Install Java v.17 or greater from Oracle
    - https://www.oracle.com/java/technologies/downloads/#java17
  - Guides to installing Java for your OS
    - **Ensure that your JAVA_HOME variable is configured correctly & that you are using Java v.17 or greater**
    - Mac: https://www.geeksforgeeks.org/how-to-install-java-on-macos/
    - Linux: https://www.rosehosting.com/blog/how-to-install-java-17-lts-on-ubuntu-20-04/
    - Windows: https://phoenixnap.com/kb/install-java-windows
  - After your environment variable is set, confirm it using the command specific to your OS
    - Linux/Mac: echo $JAVA_HOME
    - Windows: echo %JAVA_HOME%
    
**Configuring Maven Environment:**
  - Download Apache Maven (zip file is likely the easiest option)
    - https://maven.apache.org/download.cgi
  - Extract Maven and save in desired directory on your machine
  - Configure environment variables:
    - MacOS: https://stackoverflow.com/a/67617378
    - Linux:
      - After downloading, do the following:
        - nano .bashrc
        - Add the following lines to the end of the file
          - export M2_HOME=/opt/apache-maven-3.90
          - export PATH=${M2_HOME}/bin:${PATH}
    - Windows: https://phoenixnap.com/kb/install-maven-windows

    
