function Footer() {
    return(
<footer className="bg-white relative bottom-0 w-full ">
    <div className="w-full mx-auto max-w-screen-xl p-4 ">
        <p className="text-sm text-gray-500 text-center dark:text-gray-400 ">© 2023 Naifos Dev All Rights Reserved.</p>
    </div>
    <div className="hidden">
	      <div itemScope itemType="https://schema.org/Organization" >
		        <h3 itemProp="name">Rhrara Sofiane, Développeur fontend React.js</h3>	  
		        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
			          <h4>Adresse:</h4>
			          <span itemProp="streetAddress">26 rue Louis Armand</span>
			          <span itemProp="postalCode">54800</span>
			          <span itemProp="addressLocality">Jarny, France</span>
					      <span itemProp="addressRegion">Lorraine</span>
		        </div>
			          <h4>Telephone:</h4>
			          <span itemProp="telephone"> +33 671451172 </span>
			          <h4>Horaires :</h4>
				        <div itemProp="openingHours" content="Mo-Fr 08:00-18:00">Du Lundi au Vendredi de <time> 08:00</time> - <time> 18:00</time></div>
	      </div>
    </div>
</footer>
    )
}

export default Footer