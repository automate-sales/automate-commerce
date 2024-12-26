"use client"

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { RefObject, useRef, useState } from 'react';
import { faqData } from '../../../../data/faq'

export function FAQ() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  let myRef: RefObject<{[key: string]: {offsetTop: number}|HTMLDivElement}> = useRef({})
  const handleItemClick = (sectionId: string, itemId: string) => {
    setActiveSection(sectionId)
    setActiveItem(itemId === activeItem ? null : itemId)
  }
  const scrollToRef = (key: string) => window.scrollTo({behavior:'smooth', top:myRef && myRef.current? myRef.current[key].offsetTop - 100: 0})
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    scrollToRef(sectionId)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      
      {/* Index */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Quick Navigation</h3>
        <div className="flex flex-wrap gap-2">
          {faqData.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Sections */}
      {faqData.map((section) => (
        <div key={section.id} ref={(elem) => { if (myRef && myRef.current && elem) myRef.current[section.id] = elem }} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
          {section.items.map((item, idx) => (
            <div key={`${section.id}-${idx}`} className="mb-4">
              <button
                className={`w-full text-left p-4 flex justify-between items-center rounded-md transition-colors ${
                  activeItem === `${section.id}-${idx}`
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => handleItemClick(section.id, `${section.id}-${idx}`)}
                aria-expanded={activeItem === `${section.id}-${idx}`}
                aria-controls={`answer-${section.id}-${idx}`}
              >
                <span className="font-semibold">{item.question}</span>
                {activeItem === `${section.id}-${idx}` ? (
                  <ChevronUpIcon className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {activeItem === `${section.id}-${idx}` && (
                <div
                  id={`answer-${section.id}-${idx}`}
                  className="mt-2 p-4 bg-white rounded-md shadow"
                >
                  {item.answerJsx}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

