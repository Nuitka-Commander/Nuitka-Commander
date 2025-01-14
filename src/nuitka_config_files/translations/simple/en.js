// noinspection JSUnusedGlobalSymbols
/**
 * @Description English language pack （LLM translation）
 * @author erduotong
 */
export default {
    //title类请在此处翻译
    title: {
        basic: "Basic Settings",
        control_the_following_into_imported_modules: "Control Imported Modules",
        compiler_settings: "Compiler Settings",
        binary_version_information: "Binary Version Information",
    },
    //basic 基本设置
    main: {
        name: "Main Program Path",
        desc: "If specified once (e.g., --main=\"1.py\"), this will override the positional argument, which is the file name to be compiled (entry). If specified multiple times (e.g., --main=\"1.py\" --main=\"2.py\"), it enables \"multidist\", which allows you to create binaries that depend on the file name or call name.\n" + "(Allows multiple main programs to use the same set of compilation parameters)\n",
    },
    standalone: {
        name: "Standalone Mode",
        desc: "Enable standalone mode for output. This allows you to transfer the binary to other machines without needing an existing Python environment. This also means it will become very large.\nIt will enable these options: \"--follow-imports\" and \"--python-flag=no_site\".",
    },
    onefile: {
        name: "Onefile Mode",
        desc: "On top of standalone mode, enable onefile mode. This means creating and using a single compressed executable file instead of a folder.",
    },
    output_filename: {
        name: "Output Filename",
        desc: "Specify the name of the executable file. Extension modules and standalone mode do not have this option and will error when used. This may need to include existing path information.\n" +
            "Defaults to \"＜program_name＞.exe\" on the current platform.",
        elements: {
            program_name: {
                name: "Program Name",
                desc: "＜program_name＞",
            },
        },
    },
    output_dir: {
        name: "Output Directory",
        desc: "Specify the location for intermediate files and the final output file. The selected directory will house the build folder, distribution folder, binary files, etc. Defaults to the current directory.",
        elements: {
            current_directory: {
                name: "Current Directory",
                desc: "Current Directory",
            },
        },
    },
    remove_output: {
        name: "Remove Build Folder",
        desc: "Delete the build folder after generating the exe or module file. Defaults to off.",
    },
    enable_plugins: {
        name: "Enable Plugins",
        desc: "Enable plugins. Must be the plugin name. Defaults to empty",
        elements: {
            anti_bloat: {
                name: "Anti-Bloat",
                desc: "Remove stupid import patches from widely used library module sources.",
            },
            data_files: {
                name: "Include Data Files",
                desc: "Include data files specified by the package configuration file.",
            },
            delvewheel: {
                name: "Delvewheel Support",
                desc: "Support for packages using delvewheel in standalone mode.",
            },
            dill_compat: {
                name: "Dill Package Compatibility Support",
                desc: "Support for \'dill\' package compatibility.",
            },
            dll_files: {
                name: "Include DLL Files",
                desc: "Include DLL configuration files according to the package configuration file.",
            },
            enum_compat: {
                name: "Enum Compatibility",
                desc: "Support for Python2 and the enum package.",
            },
            eventlet: {
                name: "Eventlet Support",
                desc: "Support for including 'eventlet' dependencies and its monkey patch needs for the 'dns' package.",
            },
            gevent: {
                name: "Gevent Support",
                desc: "Support for the gevent package.",
            },
            gi: {
                name: "GI Support",
                desc: "Support for typelib dependencies of the GI package.",
            },
            glfw: {
                name: "GLFW Support",
                desc: "Support for using 'OpenGL' (PyOpenGL) and 'glfw' packages in standalone mode.",
            },
            implicit_imports: {
                name: "Implicit Imports",
                desc: "Provide implicit imports according to the package configuration file.",
            },
            kivy: {
                name: "Kivy Support",
                desc: "Support for the 'kivy' package.",
            },
            matplotlib: {
                name: "Matplotlib Support",
                desc: "Support for the 'matplotlib' module.",
            },
            multiprocessing: {
                name: "Multiprocessing Support",
                desc: "Support for Python's 'multiprocessing' module.",
            },
            no_qt: {
                name: "Disable Qt",
                desc: "Disable all Qt bindings in standalone mode.",
            },
            options_nanny: {
                name: "Options Nanny",
                desc: "Notify users of potential issues according to the package configuration file.",
            },
            pbr_compat: {
                name: "PBR Compatibility Support",
                desc: "Support for using the 'pbr' package in standalone mode.",
            },
            pkg_resources: {
                name: "Pkg Resources Support",
                desc: "Solutions for pkg resources.",
            },
            pmw_freezer: {
                name: "Pmw Support",
                desc: "Support for the 'Pmw' package.",
            },
            pylint_warnings: {
                name: "Pylint Warnings",
                desc: "Support for PyLint / PyDev code marking.",
            },
            pyqt5: {
                name: "PyQt5 Support",
                desc: "Support for the 'PyQt5' package.",
            },
            pyqt6: {
                name: "PyQt6 Support",
                desc: "Support for the 'PyQt6' package.",
            },
            pyside2: {
                name: "PySide2 Support",
                desc: "Support for the 'PySide2' package.",
            },
            pyside6: {
                name: "PySide6 Support",
                desc: "Support for the 'PySide6' package.",
            },
            pywebview: {
                name: "PyWebview Support",
                desc: "Support for the 'webview' package (pywebview on PyPI).",
            },
            tk_inter: {
                name: "Tkinter Support",
                desc: "Support for Python's Tk module.",
            },
            transformers: {
                name: "Transformers Implicit Imports",
                desc: "Provide implicit imports for the transformers package.",
            },
            upx: {
                name: "Auto Use UPX",
                desc: "Automatically use UPX to compress the created binary files.",
            },
        },
    },
    disable_plugins: {
        name: "Disable Plugins",
        desc: "Disable plugins. Must be the plugin name. Use '--plugin-list' to query the full list and exit. Most of the time, disabling standard plugins is not a good idea. Defaults to empty.",
        elements: {
            anti_bloat: {
                name: "Anti-Bloat",
                desc: "Remove stupid import patches from widely used library module sources.",
            },
            data_files: {
                name: "Include Data Files",
                desc: "Include data files specified by the package configuration file.",
            },
            delvewheel: {
                name: "Delvewheel Support",
                desc: "Support for packages using delvewheel in standalone mode.",
            },
            dill_compat: {
                name: "Dill Package Compatibility Support",
                desc: "Support for \'dill\' package compatibility.",
            },
            dll_files: {
                name: "Include DLL Files",
                desc: "Include DLL configuration files according to the package configuration file.",
            },
            enum_compat: {
                name: "Enum Compatibility",
                desc: "Support for Python2 and the enum package.",
            },
            eventlet: {
                name: "Eventlet Support",
                desc: "Support for including 'eventlet' dependencies and its monkey patch needs for the 'dns' package.",
            },
            gevent: {
                name: "Gevent Support",
                desc: "Support for the gevent package.",
            },
            gi: {
                name: "GI Support",
                desc: "Support for typelib dependencies of the GI package.",
            },
            glfw: {
                name: "GLFW Support",
                desc: "Support for using 'OpenGL' (PyOpenGL) and 'glfw' packages in standalone mode.",
            },
            implicit_imports: {
                name: "Implicit Imports",
                desc: "Provide implicit imports according to the package configuration file.",
            },
            kivy: {
                name: "Kivy Support",
                desc: "Support for the 'kivy' package.",
            },
            matplotlib: {
                name: "Matplotlib Support",
                desc: "Support for the 'matplotlib' module.",
            },
            multiprocessing: {
                name: "Multiprocessing Support",
                desc: "Support for Python's 'multiprocessing' module.",
            },
            no_qt: {
                name: "Disable Qt",
                desc: "Disable all Qt bindings in standalone mode.",
            },
            options_nanny: {
                name: "Options Nanny",
                desc: "Notify users of potential issues according to the package configuration file.",
            },
            pbr_compat: {
                name: "PBR Compatibility Support",
                desc: "Support for using the 'pbr' package in standalone mode.",
            },
            pkg_resources: {
                name: "Pkg Resources Support",
                desc: "Solutions for pkg resources.",
            },
            pmw_freezer: {
                name: "Pmw Support",
                desc: "Support for the 'Pmw' package.",
            },
            pylint_warnings: {
                name: "Pylint Warnings",
                desc: "Support for PyLint / PyDev code marking.",
            },
            pyqt5: {
                name: "PyQt5 Support",
                desc: "Support for the 'PyQt5' package.",
            },
            pyqt6: {
                name: "PyQt6 Support",
                desc: "Support for the 'PyQt6' package.",
            },
            pyside2: {
                name: "PySide2 Support",
                desc: "Support for the 'PySide2' package.",
            },
            pyside6: {
                name: "PySide6 Support",
                desc: "Support for the 'PySide6' package.",
            },
            pywebview: {
                name: "PyWebview Support",
                desc: "Support for the 'webview' package (pywebview on PyPI).",
            },
            tk_inter: {
                name: "Tkinter Support",
                desc: "Support for Python's Tk module.",
            },
            transformers: {
                name: "Transformers Implicit Imports",
                desc: "Provide implicit imports for the transformers package.",
            },
            upx: {
                name: "Auto Use UPX",
                desc: "Automatically use UPX to compress the created binary files.",
            },
        },
    },
    report: {
        name: "Output Report",
        desc: "Enter an XML filename to report detailed information about modules, data files, compilation, plugins, etc., in an XML output file. This is also very useful for reporting issues.\n" +
            "For example, these reports can be used to easily recreate the environment using \'--create-environment-from-report\', but the report contains a lot of information. Defaults to off.",
    },
    show_memory: {
        name: "Show Memory",
        desc: "Show memory usage. Defaults to off.",
    },
    windows_console_mode: {
        name: "Windows Console Mode",
        desc: "Select the console mode to use, default mode is force",
        elements: {
            force: {
                name: "Force Creation",
                desc: "This will create one if there is no console window available, i.e., the program is started from a console window.",
            },
            disable: {
                name: "Disable Console",
                desc: "No console will be created or used.",
            },
            attach: {
                name: "Attach to Existing",
                desc: "Use the existing console for output.",
            },
            hide: {
                name: "Hide Mode",
                desc: "The newly created console will be hidden, and the existing console will behave like 'force mode'.",
            },
        },
    },
    windows_icon_from_ico: {
        name: "Windows Icon (ICO File)",
        desc: "Add an icon for the executable. Can be given multiple times for different resolutions or files containing multiple icons. When selecting a file containing multiple icons,\n" +
            "you can also use the ＃＜n＞ suffix to specify a particular icon to include and ignore all others, where n is an integer index starting from 1.",
    },
    // Compiler Settings
    clang: {
        name: "Force Use Clang",
        desc: "Force the use of clang. On Windows systems, this requires a working Visual Studio version to support. Defaults to off.",
    },
    mingw64: {
        name: "Force Use MinGW64",
        desc: "Force the use of MinGW64 on Windows. Defaults to off unless using MSYS2 and MinGW Python.",
    },
    msvc: {
        name: "Use MSVC Version",
        desc: "Force the use of a specific MSVC version on Windows. Allowed values are \"14.3\" (MSVC 2022) and other MSVC version numbers.\n" +
            "Use \"list\" to get a list of installed compilers, or use \"latest\". Defaults to the latest MSVC if available, otherwise uses MinGW64.",
        elements: {
            latest: {
                name: "Latest Version",
                desc: "Use the latest MSVC version.",
            },
        },
    },
    // Control the following into imported modules
    follow_imports: {
        name: "Follow Imports",
        desc: "Follow all imported modules. Enabled by default in standalone mode, otherwise off.",
    },
    follow_import_to: {
        name: "Follow Import to Module",
        desc: "Follow to the module if it is used, or to the entire package if it is a package. Can be given multiple times. Defaults to empty.",
    },
    nofollow_import_to: {
        name: "Do Not Follow Import to Module",
        desc: "Do not follow the module name even if it is used, or do not follow the entire package if it is a package name, overriding all other options.\n" +
            "This can also contain patterns, such as \"*.tests\". Can be given multiple times. Defaults to empty.",
    },
    nofollow_imports: {
        name: "Do Not Follow All Imports",
        desc: "Do not recursively follow into any imported modules, which will override all other inclusion options and cannot be used in standalone mode. Defaults to off.",
    },
    follow_stdlib: {
        name: "Follow Standard Library Imports",
        desc: "Also follow modules imported from the standard library, which will greatly increase compilation time and is not well tested, sometimes may not work. Defaults to off.",
    },
    // Binary Version Information
    company_name: {
        name: "Company Name",
        desc: "The company name to use in the version information. Defaults to none.",
    },
    product_name: {
        name: "Product Name",
        desc: "The product name to use in the version information. Defaults to the base filename of the binary.",
    },
    file_version: {
        name: "File Version",
        desc: "The file version to use in the version information. Must be a sequence of up to 4 numbers, e.g., 1.0 or 1.0.0.0, no more numbers or strings allowed. Defaults to none.",
    },
    product_version: {
        name: "Product Version",
        desc: "The product version to use in the version information. Must be a sequence of up to 4 numbers, e.g., 1.0 or 1.0.0.0, no more numbers or strings allowed. Defaults to none.",
    },
    file_description: {
        name: "File Description",
        desc: "The file description to use in the version information. Currently only available on Windows. Defaults to the filename of the binary.",
    },
    copyright: {
        name: "Copyright Text",
        desc: "The copyright information to use in the version information. Currently available on Windows/macOS. Defaults to not display.",
    },
    trademarks: {
        name: "Trademarks Text",
        desc: "The trademarks to use in the version information. Currently available on Windows/macOS. Defaults to not display.",
    },
};