'use client'
import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Image from 'next/image';

const libraries = ["places"]; // IMPORTING 'PLACES' LIBRARY FROM GOOGLE MAPS

function GoogleReviews() {
	const [reviews, setReviews] = useState([]);
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyCIdnqck9F1laYdu4JQt1V3Mk_CVxSwoj8", 
		libraries,
	});

	useEffect(() => {
		if (isLoaded && !loadError) {
			const mapDiv = document.createElement("div");
			mapDiv.style.display = "none";
			document.body.appendChild(mapDiv);

			const service = new google.maps.places.PlacesService(mapDiv);
			service.getDetails(
				{
					placeId: "ChIJv8DmMDhXgUcRHryN6sOp40Y",
					fields: ["reviews"],
          language: "it"
				},

				(place, status) => {
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						setReviews(place.reviews); 
					}
				}
			);

			return () => {
				document.body.removeChild(mapDiv);
			};
		}
	}, [isLoaded, loadError]);

	return (
		<div>
      {console.log(reviews)}
			{reviews?.map((review) => (
				<div key={review.id || review.time}>
					<p>
						<strong>NAME : </strong>
						{review.author_name}
					</p>
					<p>
						<strong>RATING : </strong>
						{review.rating}
					</p>
					<p>
						<strong>TEXT : </strong>
						{review.text}
					</p>
					{/* USER PROFILE PHOTO */}
					{review.profile_photo_url && (
						<img
							src={review.profile_photo_url}
							alt={`${review.author_name}'s profile`}
						/>
					)}
					{/* PHOTOS ASSOCIATED WITH REVIEW */}
					{review.photos &&
						review.photos.map((photo, index) => (
							<img
								key={index}
								src={photo.getUrl()}
								alt={`Photo ${index + 1} for review by ${
									review.author_name
								}`}
							/>
						))}
					<hr />
				</div>
			))}
		</div>
	);
}

export default GoogleReviews;
