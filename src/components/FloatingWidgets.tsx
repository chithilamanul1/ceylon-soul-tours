'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircleIcon, StarIcon, XIcon, ThumbsUpIcon } from 'lucide-react'

export function FloatingWidgets() {
    const [showReviewModal, setShowReviewModal] = useState(false)
    const [rating, setRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const handleRatingClick = (selectedRating: number) => {
        setRating(selectedRating)

        if (selectedRating === 5) {
            // Redirect to real Google Business Profile review link
            // Replace with actual Google Review link
            window.open('https://g.page/r/ceylonsoultravels/review', '_blank')
            setShowReviewModal(false)
            setRating(0)
        } else {
            // Fake submission for 1-4 stars
            setSubmitted(true)
            setTimeout(() => {
                setShowReviewModal(false)
                setSubmitted(false)
                setRating(0)
            }, 3000)
        }
    }

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
                <button
                    onClick={() => setShowReviewModal(true)}
                    className="h-14 w-14 bg-white text-primary rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform border border-gray-100"
                    aria-label="Rate Us"
                >
                    <StarIcon className="h-6 w-6 fill-primary" />
                </button>

                <a
                    href="https://wa.me/94771234567" // Replace with actual WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 w-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircleIcon className="h-7 w-7" />
                </a>
            </div>

            <AnimatePresence>
                {showReviewModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full relative"
                        >
                            <button
                                onClick={() => setShowReviewModal(false)}
                                className="absolute top-4 right-4 text-ink/50 hover:text-ink transition-colors"
                            >
                                <XIcon className="h-5 w-5" />
                            </button>

                            {submitted ? (
                                <div className="text-center py-6">
                                    <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ThumbsUpIcon className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-ink mb-2">Thank You!</h3>
                                    <p className="text-ink/70 text-sm">Your feedback has been submitted successfully. We appreciate your input.</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <h3 className="font-display text-3xl font-bold text-ink mb-2">Rate Your Experience</h3>
                                    <p className="text-ink/70 text-sm mb-8">How was your journey with Ceylon Soul Travels?</p>

                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                onMouseEnter={() => setHoveredRating(star)}
                                                onMouseLeave={() => setHoveredRating(0)}
                                                onClick={() => handleRatingClick(star)}
                                                className="p-1 transition-transform hover:scale-110"
                                            >
                                                <StarIcon
                                                    className={`h-10 w-10 transition-colors ${star <= (hoveredRating || rating)
                                                            ? 'fill-primary text-primary'
                                                            : 'fill-transparent text-gray-300'
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-ink/40 mt-6">Click a star to submit your rating</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
