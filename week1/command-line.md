1. Command Line Customization  
    - How do I display current (default) prompt setting?
    Simply use echo command, enter:  
    >$ echo $PS1  
    Output:
    >\\u@\h \\W]\\$

    - How do I modify or change the prompt?
    Modifying the prompt is easy task. Just assign a new value to PS1 and hit enter key:  
    >PS1="touch me : "  
    >Output: My new prompt

    - How do i modify the color:
    nano ~/.bashrc
    >if [ "$color_prompt" = yes ]; then  
    >    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;36m\]\u@\h\[\033[00m\]:\[\$  
    >else  
    >    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '  

    - Color Values :
        >- Black: 30
        >- Blue: 34
        >- Cyan: 36
        >- Green: 32
        >- Purple: 35
        >- Red: 31
        >- White: 37
        >- Yellow: 33

2. Install using package manager
    - A package manager or package management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer's operating system in a consistent manner.  

        - particular package manager, as most package managers offer similar functions.  

        - Ubuntu features a comprehensive package management system for installing, upgrading, configuring, and removing software. In addition to providing access to an organized base of over 45,000 software packages for your Ubuntu computer, the package management facilities also feature dependency resolution capabilities and software update checking.
Several tools are available for interacting with Ubuntu's package management system, from simple command-line utilities which may be easily automated by system administrators, to a simple graphical interface which is easy to use by those new to Ubuntu.

    - A repository is a list of available software packages in a given snapshot in time. Since the packages in this list are sometimes added, removed and updated, you need to update your system repositories from time to time. This will enable you to have an updated list of all the available software packages of the repository.
It is best to update the repositories before installing a new software by running the following
sudo apt-get update

        - The apt-get utility also provides a way to do the same. Use the following command as root in order to upgrade software on your system:  

        - sudo apt-get upgrade  

        - In order to search for available packages from the Internet repositories, you can use the apt-cache utility  

        - sudo apt-cache search "opera-stable"  

        - You can get detailed information about the package through the following apt-cache command:  

        - sudo apt-cache show "opera-stable"  

        yum is the primary tool for getting, installing, deleting, querying, and managing Red Hat Enterprise Linux RPM software packages from official Red Hat software repositories, as well as other third-party repositories  

        - Installation npm via command line by apt package  

        - sudo apt update  

        - sudo apt install nodejs npm  

        - nodejs --version  





