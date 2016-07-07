var htmlTempl = htmlTempl || {};
htmlTempl["templates"] = {"src/controllers/knob/knob.html":"<div tabindex=\"0\"\r\n     class=\"sisiliano\"\r\n     role=\"slider\"\r\n     aria-label=\"{{title}}\"\r\n     aria-describedby=\"{{description}}\"\r\n     aria-valuenow=\"\"\r\n     aria-valuemax=\"{{max}}\"\r\n     aria-valuemin=\"{{min}}\">\r\n    <svg\r\n            xmlns:osb=\"http://www.openswatchbook.org/uri/2009/osb\"\r\n            xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n            xmlns:cc=\"http://creativecommons.org/ns#\"\r\n            xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n            xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n            viewBox=\"0 0 300 300\"\r\n            width=\"100%\"\r\n            height=\"100%\"\r\n            class=\"sisiliano-knob\">\r\n        <defs\r\n                id=\"defs4\">\r\n            <filter\r\n                    style=\"color-interpolation-filters:sRGB;\"\r\n                    id=\"filter6244\">\r\n                <feFlood\r\n                        flood-opacity=\"0.4\"\r\n                        flood-color=\"black\"\r\n                        result=\"flood\"\r\n                        id=\"feFlood6246\" />\r\n                <feComposite\r\n                        in=\"flood\"\r\n                        in2=\"SourceGraphic\"\r\n                        operator=\"in\"\r\n                        result=\"composite1\"\r\n                        id=\"feComposite6248\" />\r\n                <feGaussianBlur\r\n                        in=\"composite1\"\r\n                        stdDeviation=\"3\"\r\n                        result=\"blur\"\r\n                        id=\"feGaussianBlur6250\" />\r\n                <feOffset\r\n                        dx=\"-1\"\r\n                        dy=\"1\"\r\n                        result=\"offset\"\r\n                        id=\"feOffset6252\" />\r\n                <feComposite\r\n                        in=\"SourceGraphic\"\r\n                        in2=\"offset\"\r\n                        operator=\"over\"\r\n                        result=\"composite2\"\r\n                        id=\"feComposite6254\" />\r\n            </filter>\r\n            <filter\r\n                    style=\"color-interpolation-filters:sRGB;\"\r\n                    id=\"filter6245\">\r\n                <feFlood\r\n                        flood-opacity=\"0.5\"\r\n                        flood-color=\"black\"\r\n                        result=\"flood\"\r\n                        id=\"feFlood6246\" />\r\n                <feComposite\r\n                        in=\"flood\"\r\n                        in2=\"SourceGraphic\"\r\n                        operator=\"in\"\r\n                        result=\"composite1\"\r\n                        id=\"feComposite6248\" />\r\n                <feGaussianBlur\r\n                        in=\"composite1\"\r\n                        stdDeviation=\"3.5\"\r\n                        result=\"blur\"\r\n                        id=\"feGaussianBlur6250\" />\r\n                <feOffset\r\n                        dx=\"2\"\r\n                        dy=\"-2\"\r\n                        result=\"offset\"\r\n                        id=\"feOffset6252\" />\r\n                <feComposite\r\n                        in=\"SourceGraphic\"\r\n                        in2=\"offset\"\r\n                        operator=\"over\"\r\n                        result=\"composite2\"\r\n                        id=\"feComposite6254\" />\r\n            </filter>\r\n        </defs>\r\n\r\n        <style>\r\n            .sisiliano-knob-circle {\r\n                filter: url(\"#filter6244\");\r\n            }\r\n            .sisiliano-border, .sisiliano:focus .sisiliano-knob-circle {\r\n                filter: url(\"#filter6245\");\r\n            }\r\n        </style>\r\n\r\n        <g style=\"display:inline\">\r\n            <circle\r\n                    class=\"sisiliano-border\"\r\n                    r=\"147\" cx=\"150\"\r\n                    cy=\"150\">\r\n            </circle>\r\n            <circle\r\n                    class=\"sisiliano-knob-circle sisiliano-knob-background-circle\"\r\n                    id=\"circle5634\"\r\n                    r=\"130\"\r\n                    cx=\"150\"\r\n                    cy=\"150\"/>\r\n            <text xmlns=\"http://www.w3.org/2000/svg\" x=\"40\" y=\"170\"\r\n                  class=\"unselectable sisiliano-knob-value-text\">\r\n                100\r\n            </text>\r\n            <circle\r\n                    class=\"sisiliano-knob-circle sisiliano-knob-value-circle\"\r\n                    fill=\"transparent\"\r\n                    id=\"circle5636\"\r\n                    r=\"130\"\r\n                    cx=\"150\"\r\n                    cy=\"150\"\r\n                    stroke-width=\"20\"/>\r\n        </g>\r\n    </svg>\r\n</div>","src/controllers/piano/piano.html":"<div tabindex=\"0\" class=\"sisiliano\" aria-label=\"{{title}} ,{{description}}\" id=\"{{id}}\">\r\n    <svg\r\n            xmlns:osb=\"http://www.openswatchbook.org/uri/2009/osb\"\r\n            xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n            xmlns:cc=\"http://creativecommons.org/ns#\"\r\n            xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n            xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n            class=\"sisiliano-piano\"\r\n            width=\"100%\"\r\n            height=\"100%\"\r\n            viewBox=\"0 0 {{viewBox.width}} {{viewBox.height}}\">\r\n        <defs\r\n                id=\"defs4\">\r\n            <filter\r\n                    style=\"color-interpolation-filters:sRGB;\"\r\n                    id=\"filter6244\">\r\n                <feFlood\r\n                        flood-opacity=\"0.5\"\r\n                        flood-color=\"black\"\r\n                        result=\"flood\"\r\n                        id=\"feFlood6246\"/>\r\n                <feComposite\r\n                        in=\"flood\"\r\n                        in2=\"SourceGraphic\"\r\n                        operator=\"in\"\r\n                        result=\"composite1\"\r\n                        id=\"feComposite6248\"/>\r\n                <feGaussianBlur\r\n                        in=\"composite1\"\r\n                        stdDeviation=\"3\"\r\n                        result=\"blur\"\r\n                        id=\"feGaussianBlur6250\"/>\r\n                <feOffset\r\n                        dx=\"0\"\r\n                        dy=\"1\"\r\n                        result=\"offset\"\r\n                        id=\"feOffset6252\"/>\r\n                <feComposite\r\n                        in=\"SourceGraphic\"\r\n                        in2=\"offset\"\r\n                        operator=\"over\"\r\n                        result=\"composite2\"\r\n                        id=\"feComposite6254\"/>\r\n            </filter>\r\n            <filter\r\n                    style=\"color-interpolation-filters:sRGB;\"\r\n                    id=\"filter6245\">\r\n                <feFlood\r\n                        flood-opacity=\"0.5\"\r\n                        flood-color=\"black\"\r\n                        result=\"flood\"\r\n                        id=\"feFlood6246\"/>\r\n                <feComposite\r\n                        in=\"flood\"\r\n                        in2=\"SourceGraphic\"\r\n                        operator=\"in\"\r\n                        result=\"composite1\"\r\n                        id=\"feComposite6248\"/>\r\n                <feGaussianBlur\r\n                        in=\"composite1\"\r\n                        stdDeviation=\"8\"\r\n                        result=\"blur\"\r\n                        id=\"feGaussianBlur6250\"/>\r\n                <feOffset\r\n                        dx=\"-3\"\r\n                        dy=\"3.5\"\r\n                        result=\"offset\"\r\n                        id=\"feOffset6252\"/>\r\n                <feComposite\r\n                        in=\"SourceGraphic\"\r\n                        in2=\"offset\"\r\n                        operator=\"over\"\r\n                        result=\"composite2\"\r\n                        id=\"feComposite6254\"/>\r\n            </filter>\r\n            <filter\r\n                    style=\"color-interpolation-filters:sRGB;\"\r\n                    id=\"filter6245\">\r\n                <feFlood\r\n                        flood-opacity=\"0.5\"\r\n                        flood-color=\"black\"\r\n                        result=\"flood\"\r\n                        id=\"feFlood6246\"/>\r\n                <feComposite\r\n                        in=\"flood\"\r\n                        in2=\"SourceGraphic\"\r\n                        operator=\"in\"\r\n                        result=\"composite1\"\r\n                        id=\"feComposite6248\"/>\r\n                <feGaussianBlur\r\n                        in=\"composite1\"\r\n                        stdDeviation=\"3.5\"\r\n                        result=\"blur\"\r\n                        id=\"feGaussianBlur6250\"/>\r\n                <feOffset\r\n                        dx=\"2\"\r\n                        dy=\"-2\"\r\n                        result=\"offset\"\r\n                        id=\"feOffset6252\"/>\r\n                <feComposite\r\n                        in=\"SourceGraphic\"\r\n                        in2=\"offset\"\r\n                        operator=\"over\"\r\n                        result=\"composite2\"\r\n                        id=\"feComposite6254\"/>\r\n            </filter>\r\n        </defs>\r\n\r\n        <style>\r\n            /* These styles have been added seperately as a fix for firefox and IE */\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-white-key {\r\n                filter: url('#filter6244');\r\n            }\r\n\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-black-key {\r\n                filter: url('#filter6244');\r\n            }\r\n\r\n            #{{id}}.sisiliano-border {\r\n                filter: url(\"#filter6245\");\r\n            }\r\n\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-key-pressed,\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-white-key:hover,\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-black-key:hover,\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-key-inactive:hover {\r\n                fill: {{color}};\r\n                stroke: {{color}};\r\n            }\r\n        </style>\r\n        <g style=\"display:inline\">\r\n            <text\r\n                    x=\"{{keyBoard.border.x}}\"\r\n                    y=\"{{keyBoard.border.y}}\"\r\n                    aria-live=\"assertive\"\r\n                    class=\"sisiliano-piano-active-area-status\">\r\n                Piano is active from G to C\r\n            </text>\r\n            <rect\r\n                    class=\"sisiliano-border\"\r\n                    height=\"{{keyBoard.border.height}}\"\r\n                    width=\"{{keyBoard.border.width}}\"\r\n                    x=\"{{keyBoard.border.x}}\"\r\n                    y=\"{{keyBoard.border.y}}\"/>\r\n            {{#each keyBoard.whiteKeys}}\r\n            <rect\r\n                    index=\"{{index}}\"\r\n                    class=\"sisiliano-piano-key sisiliano-piano-white-key\"\r\n                    height=\"{{height}}\"\r\n                    width=\"{{width}}\"\r\n                    x=\"{{x}}\"\r\n                    y=\"{{y}}\"/>\r\n            {{/each}}\r\n            {{#each keyBoard.blackKeys}}\r\n            <rect\r\n                    index=\"{{index}}\"\r\n                    class=\"sisiliano-piano-key sisiliano-piano-black-key\"\r\n                    height=\"{{height}}\"\r\n                    width=\"{{width}}\"\r\n                    x=\"{{x}}\"\r\n                    y=\"{{y}}\"/>\r\n            {{/each}}\r\n        </g>\r\n\r\n        <!--<g style=\"display:inline\">\r\n          <rect\r\n            class=\"sisiliano-piano-key sisiliano-piano-disabledArea\"\r\n            height=\"{{disabledArea.left.height}}\"\r\n            width=\"{{disabledArea.left.width}}\"\r\n            x=\"{{disabledArea.left.x}}\"\r\n            y=\"{{disabledArea.left.y}}\" />\r\n          <rect\r\n            class=\"sisiliano-piano-key sisiliano-piano-disabledArea\"\r\n            height=\"{{disabledArea.right.height}}\"\r\n            width=\"{{disabledArea.right.width}}\"\r\n            x=\"{{disabledArea.right.x}}\"\r\n            y=\"{{disabledArea.right.y}}\" />\r\n        </g>-->\r\n    </svg>\r\n</div>\r\n"};