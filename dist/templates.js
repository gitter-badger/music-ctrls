var htmlTempl = htmlTempl || {};
htmlTempl["templates"] = {"src/controllers/knob/knob.html":"<div tabindex=\"0\" class=\"sisiliano\" role=\"slider\" aria-label=\"Ring Slider\" aria-valuemax=\"100\" aria-valuemin=\"0\">\r\n  <svg\r\n    xmlns:osb=\"http://www.openswatchbook.org/uri/2009/osb\"\r\n    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n    xmlns:cc=\"http://creativecommons.org/ns#\"\r\n    xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n    xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n    viewBox=\"0 0 300 300\"\r\n    width=\"100%\"\r\n    height=\"100%\">\r\n    <defs\r\n     id=\"defs4\">\r\n      <filter\r\n         style=\"color-interpolation-filters:sRGB;\"\r\n         id=\"filter6244\">\r\n        <feFlood\r\n         flood-opacity=\"0.4\"\r\n         flood-color=\"black\"\r\n         result=\"flood\"\r\n         id=\"feFlood6246\" />\r\n        <feComposite\r\n         in=\"flood\"\r\n         in2=\"SourceGraphic\"\r\n         operator=\"in\"\r\n         result=\"composite1\"\r\n         id=\"feComposite6248\" />\r\n        <feGaussianBlur\r\n         in=\"composite1\"\r\n         stdDeviation=\"6\"\r\n         result=\"blur\"\r\n         id=\"feGaussianBlur6250\" />\r\n        <feOffset\r\n         dx=\"-3\"\r\n         dy=\"3.5\"\r\n         result=\"offset\"\r\n         id=\"feOffset6252\" />\r\n        <feComposite\r\n         in=\"SourceGraphic\"\r\n         in2=\"offset\"\r\n         operator=\"over\"\r\n         result=\"composite2\"\r\n         id=\"feComposite6254\" />\r\n      </filter>\r\n      <filter\r\n         style=\"color-interpolation-filters:sRGB;\"\r\n         id=\"filter6245\">\r\n        <feFlood\r\n         flood-opacity=\"0.5\"\r\n         flood-color=\"black\"\r\n         result=\"flood\"\r\n         id=\"feFlood6246\" />\r\n        <feComposite\r\n         in=\"flood\"\r\n         in2=\"SourceGraphic\"\r\n         operator=\"in\"\r\n         result=\"composite1\"\r\n         id=\"feComposite6248\" />\r\n        <feGaussianBlur\r\n         in=\"composite1\"\r\n         stdDeviation=\"8\"\r\n         result=\"blur\"\r\n         id=\"feGaussianBlur6250\" />\r\n        <feOffset\r\n         dx=\"-3\"\r\n         dy=\"3.5\"\r\n         result=\"offset\"\r\n         id=\"feOffset6252\" />\r\n        <feComposite\r\n         in=\"SourceGraphic\"\r\n         in2=\"offset\"\r\n         operator=\"over\"\r\n         result=\"composite2\"\r\n         id=\"feComposite6254\" />\r\n      </filter>\r\n    </defs>\r\n    \r\n    <style>\r\n      .ctrl-circle {\r\n        filter: url(\"#filter6244\");\r\n      }\r\n      .sisiliano:focus .ctrl-circle {\r\n        filter: url(\"#filter6245\");\r\n      }\r\n    </style>\r\n    \r\n    <g class=\"ctrl\"\r\n     style=\"display:inline;animadtion: rotarIz 1.5s linear;\">\r\n      <circle\r\n         class=\"ctrl-circle ctrl-circle-background\"\r\n         id=\"circle5634\"\r\n         r=\"130\"\r\n         cx=\"150\"\r\n         cy=\"150\"/>\r\n      <circle\r\n         class=\"ctrl-circle ctrl-circle-cover\"\r\n         fill=\"transparent\"\r\n         id=\"circle5636\" \r\n         r=\"130\"\r\n         cx=\"150\"\r\n         cy=\"150\"/>\r\n      <text xmlns=\"http://www.w3.org/2000/svg\" x=\"40\" y=\"170\" \r\n        role=\"alert\" aria-live=\"assertive\"\r\n        class=\"unselectable value ctrl-circle-value\">\r\n        100%\r\n      </text>\r\n    </g>\r\n  </svg>\r\n</div>","src/controllers/piano/piano.html":"<div tabindex=\"0\" class=\"fl-sisiliano\" role=\"slider\" aria-label=\"Piano\">\r\n  <svg\r\n    xmlns:osb=\"http://www.openswatchbook.org/uri/2009/osb\"\r\n    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n    xmlns:cc=\"http://creativecommons.org/ns#\"\r\n    xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n    xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n    class=\"fl-sisiliano-piano\"\r\n    width=\"100%\"\r\n    height=\"100%\"\r\n    viewBox=\"0 0 {{viewBox.width}} {{viewBox.height}}\" >\r\n    <defs\r\n      id=\"defs4\">\r\n      <filter\r\n        style=\"color-interpolation-filters:sRGB;\"\r\n        id=\"filter6244\">\r\n        <feFlood\r\n          flood-opacity=\"0.5\"\r\n          flood-color=\"black\"\r\n          result=\"flood\"\r\n          id=\"feFlood6246\" />\r\n        <feComposite\r\n          in=\"flood\"\r\n          in2=\"SourceGraphic\"\r\n          operator=\"in\"\r\n          result=\"composite1\"\r\n          id=\"feComposite6248\" />\r\n        <feGaussianBlur\r\n          in=\"composite1\"\r\n          stdDeviation=\"3\"\r\n          result=\"blur\"\r\n          id=\"feGaussianBlur6250\" />\r\n        <feOffset\r\n          dx=\"0\"\r\n          dy=\"1\"\r\n          result=\"offset\"\r\n          id=\"feOffset6252\" />\r\n        <feComposite\r\n          in=\"SourceGraphic\"\r\n          in2=\"offset\"\r\n          operator=\"over\"\r\n          result=\"composite2\"\r\n          id=\"feComposite6254\" />\r\n      </filter>\r\n      <filter\r\n        style=\"color-interpolation-filters:sRGB;\"\r\n        id=\"filter6245\">\r\n        <feFlood\r\n          flood-opacity=\"0.5\"\r\n          flood-color=\"black\"\r\n          result=\"flood\"\r\n          id=\"feFlood6246\" />\r\n        <feComposite\r\n          in=\"flood\"\r\n          in2=\"SourceGraphic\"\r\n          operator=\"in\"\r\n          result=\"composite1\"\r\n          id=\"feComposite6248\" />\r\n        <feGaussianBlur\r\n          in=\"composite1\"\r\n          stdDeviation=\"8\"\r\n          result=\"blur\"\r\n          id=\"feGaussianBlur6250\" />\r\n        <feOffset\r\n          dx=\"-3\"\r\n          dy=\"3.5\"\r\n          result=\"offset\"\r\n          id=\"feOffset6252\" />\r\n        <feComposite\r\n          in=\"SourceGraphic\"\r\n          in2=\"offset\"\r\n          operator=\"over\"\r\n          result=\"composite2\"\r\n          id=\"feComposite6254\" />\r\n      </filter>\r\n    </defs>\r\n\r\n    <style>\r\n      /* These styles have been added seperately as a fix for firefox and IE */\r\n      .fl-sisiliano .fl-sisiliano-piano .fl-sisiliano-piano-white-key {\r\n        filter: url('#filter6244');\r\n      }\r\n      .fl-sisiliano .fl-sisiliano-piano .fl-sisiliano-piano-black-key {\r\n        filter: url('#filter6244');\r\n      }\r\n    </style>\r\n    <g style=\"display:inline\">\r\n      {{#each keyBoard.whiteKeys}}\r\n      <rect\r\n        index=\"{{index}}\"\r\n        class=\"fl-sisiliano-piano-key fl-sisiliano-piano-white-key\"\r\n        height=\"{{height}}\"\r\n        width=\"{{width}}\"\r\n        x=\"{{x}}\"\r\n        y=\"{{y}}\" />\r\n      {{/each}}\r\n      {{#each keyBoard.blackKeys}}\r\n      <rect\r\n        index=\"{{index}}\"\r\n        class=\"fl-sisiliano-piano-key fl-sisiliano-piano-black-key\"\r\n        height=\"{{height}}\"\r\n        width=\"{{width}}\"\r\n        x=\"{{x}}\"\r\n        y=\"{{y}}\" />\r\n      {{/each}}\r\n    </g>\r\n\r\n    <!--<g style=\"display:inline\">\r\n      <rect\r\n        class=\"fl-sisiliano-piano-key fl-sisiliano-piano-disabledArea\"\r\n        height=\"{{disabledArea.left.height}}\"\r\n        width=\"{{disabledArea.left.width}}\"\r\n        x=\"{{disabledArea.left.x}}\"\r\n        y=\"{{disabledArea.left.y}}\" />\r\n      <rect\r\n        class=\"fl-sisiliano-piano-key fl-sisiliano-piano-disabledArea\"\r\n        height=\"{{disabledArea.right.height}}\"\r\n        width=\"{{disabledArea.right.width}}\"\r\n        x=\"{{disabledArea.right.x}}\"\r\n        y=\"{{disabledArea.right.y}}\" />\r\n    </g>-->\r\n  </svg>\r\n</div>\r\n"};