import React from "react";

const Blog = () => {
  return (
    <div>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 w-100 mx-auto my-5 rounded overflow-hidden shadow-lg text-justify p-5">
          <p>
            <span className="font-bold">Question: What is context API?</span>{" "}
            <br />
            <span className="text-green-700 font-semibold">Answer:</span>{" "}
            Context id a React Built-in tool that ships with React provides a
            way to pass data through the component tree without having to pass
            props down manually at every level. Context requires minimal Setup
            Specifically designed for static data, that is not often refreshed
            or updated. Adding new contexts requires creation from scratch.
            Debugging can be so hard in nested React Component Structure even
            with Dev Tool In a React application data is passed top-down via
            props, but such usage can be cumbersome for certain types of props
            that are required by many components within an application. Context
            share values like between components without having to explicitly
            pass a prop through every level of the tree.
          </p>
        </div>
        <div class="col-start-2 col-span-4 w-100 mx-auto my-5 rounded overflow-hidden shadow-lg text-justify p-5">
          <p>
            <span className="font-bold">Question: What is semantic tag?</span>{" "}
            <br />
            <span className="text-green-700 font-semibold">Answer:</span> In my
            little knowledge Semantic tag are those who clearly describe their
            meaning both in a human and machine-readable way. Semantic tag such
            as header, article and footer are all semantic. Because they
            accurately describe the purpose of the tag and the type of context
            that is inside. <br /> <br />
            Semantic tag list: <br />
            • article <br />
            • aside <br />
            • details <br /> • figcaption <br />
            • figure <br />
            • footer <br />
            • header <br />
            • main <br />
            • mark <br />
            • nav <br />
            • section <br />
            • summary <br />
            • time <br />
            tag like header, nav, section, article, aside, and footer act more
            or less like div tag. However, where a div tag could contain any
            type of information, it is easy to identify what sort of information
            would go in a semantic header region.
          </p>
        </div>
        <div class="col-start-2 col-span-4 w-100 mx-auto my-5 rounded overflow-hidden shadow-lg text-justify p-5">
          <p>
            <span className="font-bold">
              Question: Inline block or inline block element what are the
              difference?{" "}
            </span>
            <br /> <br />
            <span className="text-green-700 font-semibold">
              Answer:
            </span> <br /> <br />
            Inline the element doesn't start on a new line and only occupy just
            the width it requires. You can't set the width or height. Compared
            to display: inline, the major difference is that inline-block allows
            to set a width and height on the element. Also, with display:
            inline, top and bottom margins and paddings are not respected, and
            with display: inline-block they are. <br />
            <br />
            Inline-block It's formatted just like the inline element, where it
            doesn't start on a new line. But you can set width and height
            values.inline-block brought a new way to create side by side boxes
            that collapse and wrap properly depending on the available space in
            the containing element. It makes layouts that were previously
            accomplished with floats easier to create. No need to clear floats
            anymore.
            <br /> <br />
            the difference between display: inline-block and display: block is
            that, with display: block, a line break happens after the element,
            so a block element doesn't sit next to other elements. <br /> <br />
            Block the element will start on a new line and occupy the full width
            available. And you can set width and height values. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
