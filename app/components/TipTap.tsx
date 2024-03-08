"use client";

import { Color } from "@tiptap/extension-color";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ToolBar } from "./ToolBar";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import OrderedList from "@tiptap/extension-blockquote";
import ListItem from "@tiptap/extension-list-item";
import Highlight from "@tiptap/extension-highlight";
import CodeBlock from "@tiptap/extension-code-block";
import TextStyle from "@tiptap/extension-text-style";

export default function TipTap({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none ",
      },
      transformPastedText(text) {
        return text.toUpperCase();
      },
    },
    extensions: [
      StarterKit.configure({}),
      Color,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [1, 2],
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "my-custom-class",
          itemTypeName: "listItem",
        },
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: "my-custom-class",
          multicolor: true,
        },
      }),
      CodeBlock.configure({
        languageClassPrefix: "language-",
      }),
    ],

    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });
  const document_value = editor?.getHTML();
  return (
    <div className="border-2 rounded-md border-neutral-950">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
      {/* <input name="note_desc" className="" type="text" value={document_value}></input> */}
    </div>
  );
}
