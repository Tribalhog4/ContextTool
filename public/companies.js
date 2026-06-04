const COMPANIES = [
  {
    "Name": "Sharper Shape Inc.",
    "Organizations": "Sharper Shape <sharpershape.com>",
    "Description [Organization]": "Sharper Shape is a global leader in drone-based automated inspection services for utility infrastructure management. Specializing in power transmission and distribution utilities, the company offers a comprehensive AI-powered platform that combines aerial data collection, advanced sensor systems, and proprietary software. Their Living Digital Twin (LDT) platform, Sharper CORE, enables utilities to seamlessly collect, inspect, and report on asset and vegetation management. With offices in the US and Finland, the company provides solutions for real-time risk management, automated vegetation detection, and generating detailed infrastructure reports to improve operational efficiency and safety."
  },
  {
    "Name": "Carbonfuture",
    "Organizations": "Carbonfuture <carbonfuture.com>",
    "Description [Organization]": "Carbonfuture is a digital platform that streamlines the carbon removal process through an advanced Monitoring, Reporting, and Verification (dMRV) system. The platform connects carbon credit buyers with certified removal projects, focusing on technologies like biochar, bioenergy, and direct air carbon capture. It provides real-time tracking, automated reporting, and simplified certification for carbon removal credits. Carbonfuture's key features include fast certification processes, comprehensive tracking of carbon credits, and a centralized management system for ensuring compliance with environmental regulations."
  },
  {
    "Name": "Caely Renewables",
    "Organizations": "Caely Renewables <caely.com>",
    "Description [Organization]": "Caely Renewables is an environmental solutions company dedicated to helping businesses reduce carbon footprints and increase sustainable energy consumption. Based in Amsterdam, the company provides renewable energy solutions including renewable gas, biofuels, and energy attribute certificates. They actively advise and execute environmental commodity transactions, offering tools like a CO2 calculator to assist clients in meeting their decarbonization targets. With a dynamic team experienced in the environmental commodity market, Caely aims to become a knowledge leader in sustainable energy practices."
  },
  {
    "Name": "Regen Network Development",
    "Organizations": "Regen Network <regen.network>",
    "Description [Organization]": "Regen Network is a blockchain-powered platform that enables corporations and individuals to buy, trade, and retire digital carbon and ecological credits. The network uses distributed ledger technology, satellite sensing, and ecological state protocols to monitor environmental changes and generate trusted ecological attestations. It provides an open platform for applications like regenerative carbon credits, supply chain transparency, and reforestation monitoring, with the goal of incentivizing actions that support planetary health through technological innovation."
  },
  {
    "Name": "Dexter",
    "Organizations": "Dexter Energy Services <dexterenergy.ai>",
    "Description [Organization]": "Dexter Energy is an AI-powered energy technology company that provides advanced forecasting and trade optimization solutions for renewable energy companies. Their platform uses sophisticated AI algorithms and daily weather data processing to accurately predict power generation, grid imbalances, and energy loads. The company helps energy retailers and renewable energy providers optimize their portfolios, reduce balancing risks, and potentially save up to 35% on balancing costs through precise short-term trading strategies and advanced predictive technologies."
  },
  {
    "Name": "GeoDigital",
    "Organizations": "GeoDigital <geodigital.com>",
    "Description [Organization]": "GeoDigital is a technology company specializing in spatial intelligence and 3D data solutions, focusing on critical infrastructure and autonomous technologies. Headquartered in Sandy Springs, Georgia, the company combines remote sensing, LiDAR, and advanced analytics to create digital precision solutions for utilities, transportation, and infrastructure management. Their key offerings include 3D mapping technologies, a Virtual Grid solution for utility networks, and spatial data analytics that enable customers to digitize, analyze, and manage complex geospatial challenges. GeoDigital's technology supports applications in power grid optimization, autonomous vehicle development, and infrastructure synchronization."
  },
  {
    "Name": "Alternative Vision Of Business (AVOB)",
    "Organizations": "AVOB <avob.com>",
    "Description [Organization]": "AVOB is a SaaS energy management platform specializing in optimizing energy consumption for commercial and public sector buildings. The platform provides advanced analytics for tracking and managing multiple energy types including electricity, gas, and renewable sources. AVOB helps clients reduce energy bills up to 40% through automated monitoring, analysis, and optimization of energy usage across real estate and IT infrastructure."
  },
  {
    "Name": "Respira International",
    "Organizations": "Respira International <respira-international.com>",
    "Description [Organization]": "Respira is an impact-driven carbon finance business that provides comprehensive carbon credit solutions for businesses, project developers, and investors. The company channels private capital into climate change initiatives, focusing on high-quality, verified emissions reduction projects. Specializing in nature-based solutions, Respira offers bespoke carbon credit portfolios, hedging, and insurance solutions that help corporations mitigate environmental impact while supporting projects that reduce emissions, protect biodiversity, and improve community resilience."
  },
  {
    "Name": "Cloverly",
    "Organizations": "Cloverly <cloverly.com>",
    "Description [Organization]": "Cloverly is a digital infrastructure platform powering voluntary carbon markets, providing an API for carbon credit transactions and sustainability solutions. The platform enables businesses to calculate and offset carbon emissions in real-time across various sectors including ridesharing, ecommerce, financial transactions, and supply chains. With a portfolio of verified offset projects ranging from wind and solar farms to reforestation initiatives, Cloverly helps organizations become carbon neutral or carbon negative by facilitating transparent and efficient carbon credit purchasing and management."
  },
  {
    "Name": "Patch",
    "Organizations": "Patch Technologies <patch.io>",
    "Description [Organization]": "Patch is a climate technology platform that helps organizations manage carbon credits and accelerate climate solutions. The platform enables businesses to calculate emissions, purchase high-integrity carbon credits, and develop science-based carbon strategies through a centralized system. Companies can leverage Patch's API to programmatically track and manage carbon credits, with over 400 million tonnes of carbon currently managed on the platform. Patch provides dedicated carbon advisory services, data-backed project evaluations, and tools for organizations to align their sustainability goals while ensuring transparency in carbon investments."
  },
  {
    "Name": "Arencibia",
    "Organizations": "Arencibia <arencibia.com>",
    "Description [Organization]": "Arencibia is a technology company specializing in industrial resource recovery and core production systems. Founded in 1986, the company develops advanced technologies for recovering industrial gases like argon and helium, and provides mission-critical production systems. Their MARS platform offers operational efficiency solutions for industries including aerospace, specialty metals, automotive, and energy, with a focus on reducing operational costs and improving environmental performance through innovative resource recovery technologies."
  },
  {
    "Name": "Live Building Systems",
    "Organizations": "Live Building Systems <livebuildings.com>",
    "Description [Organization]": "Live Building Systems is a software platform focused on utility management and building efficiency. Their cloud-based solution integrates real-time data from smart meters to track water, fuel, and electric consumption across properties. The platform provides comprehensive analytics, automated alerts for potential issues, and actionable insights for energy savings. With features like remote monitoring, digital billing, and access to in-house technical experts, Live Building Systems helps organizations optimize their utility usage and achieve sustainability goals."
  },
  {
    "Name": "LoweConex",
    "Organizations": "LoweConex. Enterprise-ready Big Data Solutions <loweconex.com>",
    "Description [Organization]": "LoweConex is a centralized data platform that helps businesses optimize asset management and sustainability through its Conex OS operating system. The platform enables organizations to ingest, standardize, and unify data across various assets, with key capabilities including automated data resolution, HVAC optimization, and integration with Building Management Systems. Targeting sectors like retail, hospitality, manufacturing, and public services, LoweConex helps businesses reduce energy consumption, drive maintenance cost efficiencies, ensure regulatory compliance, and create more profitable customer experiences through advanced IoT and data centralization technologies."
  },
  {
    "Name": "energy & meteo systems",
    "Organizations": "Energy & Meteo Systems <energymeteo.com>",
    "Description [Organization]": "Energy & Meteo Systems and its partner companies provide advanced digital solutions for renewable energy market integration. Their platform offers precise forecasting for wind and solar power plants, enabling power traders, grid operators, and energy providers to efficiently manage decentralized energy resources. With around 200 employees, the company specializes in virtual power plant development, grid integration services, and consulting to support the transition to renewable energy systems."
  },
  {
    "Name": "winAMR",
    "Organizations": "winAMR <winamr.com>",
    "Description [Organization]": "WinAMR is a technology company specializing in smart metering solutions for electric, gas, and water utilities worldwide. Their comprehensive offering includes advanced metering infrastructure (AMI) with smart meters, communication technologies, and data management systems. The company's solutions leverage AI and flexible communication technologies like RF mesh, GPRS, and GSM to improve grid efficiency, enable real-time billing, and facilitate interaction between utilities and consumers, ultimately reducing operational costs and enhancing energy management."
  },
  {
    "Name": "Eco Surv",
    "Organizations": "Eco Surv <eco-surv.co.uk>",
    "Description [Organization]": "ECO Surv is a cloud-based workflow management platform specialized in the energy efficiency and retrofit sector. The platform provides a comprehensive solution for PAS2030 and PAS2035 accredited professionals including installers, assessors, coordinators, local authorities, and housing associations. It streamlines the entire retrofit process from lead generation to survey, eligibility checks, installation, and compliance reporting through a mobile app and SaaS platform. By digitizing processes and eliminating paper-based surveys, ECO Surv enables companies to manage energy efficiency projects more efficiently, ensuring compliance, enhancing productivity, and supporting scalable retrofitting initiatives."
  },
  {
    "Name": "Futura Systems",
    "Organizations": "Futura Systems <futuragis.com>",
    "Description [Organization]": "Futura Systems is an enterprise GIS solutions provider specializing in utility management software. As an Esri Gold Business Partner, they develop mapping, field inspection, staking, and outage management tools for distribution utilities across the United States. Their software suite includes Catalyst, an operations management tool that integrates GIS and customer information systems, helping utility companies improve operational efficiency, reduce data discrepancies, and enhance customer service."
  },
  {
    "Name": "Awesense",
    "Organizations": "Awesense <awesense.com>",
    "Description [Organization]": "Awesense is an award-winning technology company focused on helping utilities and industrial clients optimize and decarbonize their energy systems. Their Energy Transition Platform provides a cloud-based digital twin of electrical grids, enabling advanced data analytics and efficient grid management. The platform allows secure data access, supports tailored use case development, and accelerates grid project implementation through AI-powered data processing. Awesense serves customers across multiple continents, offering innovative solutions to enhance energy efficiency, support grid modernization, and facilitate the transition to more sustainable energy infrastructure."
  },
  {
    "Name": "Singularity Energy",
    "Organizations": "Singularity Energy <singularity.energy>",
    "Description [Organization]": "Singularity is a data-driven energy technology company focused on supporting decarbonization efforts for grid operators, utilities, and businesses. Their platform provides real-time carbon data and analytics to help organizations make more informed energy decisions. The company has received multiple awards, including recognition from the Harvard Physical Science and Engineering Accelerator and the National Science Foundation. Initially focused on helping utility customers reduce electricity costs through demand management and battery storage, Singularity now offers comprehensive solutions for measuring, analyzing, and optimizing energy usage and emissions across various sectors."
  },
  {
    "Name": "MelRok",
    "Organizations": "MelRok <melrok.com>",
    "Description [Organization]": "MelRok Energy IoT is a technology platform that optimizes facility operations through real-time IoT and artificial intelligence. The company develops a patented energy management solution that establishes secure two-way communication with energy devices in commercial facilities to automatically optimize energy usage. Their platform helps customers in healthcare, pharmaceuticals, campuses, and retail reduce energy and maintenance costs by 5-20%, with deployments across the United States and internationally, supported by 7 US and 3 international patents."
  },
  {
    "Name": "Energiency",
    "Organizations": "Energiency <energiency.com>",
    "Description [Organization]": "Energiency is a French software company providing innovative industrial energy performance analytics solutions. Founded in 2013 and headquartered in Rennes, the company develops cloud-based AI technologies dedicated to Industry 4.0. Their software platform enables manufacturing companies to analyze, monitor, and optimize energy consumption, helping businesses detect potential energy savings up to 20% without additional capital expenditure. The platform consolidates energy data, uses AI-driven algorithms for forecasting, and supports sustainability efforts across industries like mining, steel, and manufacturing by providing real-time energy consumption insights and efficiency improvement tools."
  },
  {
    "Name": "SewerAI",
    "Organizations": "Sewer AI <sewerai.com>",
    "Description [Organization]": "SewerAI is a Walnut Creek, California-based technology company that provides AI-powered software for sewer infrastructure assessment and maintenance. Their cloud-based platform uses computer vision and artificial intelligence to automatically detect and analyze sewer conditions from various inspection data sources like CCTV crawlers, drones, and cameras. The company's flagship products include Pioneer\u2122 (a web-based collaboration platform) and AutoCode\u2122 (AI inspection tools), enabling utilities, contractors, and engineers to streamline sewer condition assessments, improve productivity, and reduce maintenance costs."
  },
  {
    "Name": "Intellimation, LLC",
    "Organizations": "Intellimation <intellimation.io>",
    "Description [Organization]": "Intellimation is a master systems integrator specializing in building performance optimization through energy analytics and advanced technology. They provide comprehensive energy management solutions by integrating building automation systems, implementing sophisticated monitoring techniques, and creating a unified data platform. Their services include real-time metering of multiple utility types, data-driven commissioning, and continuous system optimization across over 75 distinct building automation systems. The company focuses on delivering substantial energy cost savings by leveraging advanced software tools and expert analysis to improve building efficiency and operational performance."
  },
  {
    "Name": "Enode",
    "Organizations": "Enode <enode.com>",
    "Description [Organization]": "Enode provides a comprehensive API platform that enables developers to connect and control various energy devices including electric vehicles, solar inverters, home batteries, and thermostats through a single integration point. The platform simplifies energy management application development by offering out-of-the-box algorithms that allow developers to surface device data, control energy optimization, and create user-centric experiences. Enode's technology supports automated smart charging, demand response, and helps businesses monetize energy services while accelerating the transition to sustainable energy systems with minimal integration complexity."
  },
  {
    "Name": "SATEC",
    "Organizations": "SATEC <satec-global.com>",
    "Description [Organization]": "SATEC is a technology company specializing in energy management solutions with over 30 years of experience. They develop and manufacture power metering, monitoring, and energy efficiency technologies for utility, industrial, and commercial markets. SATEC provides advanced power telemetry solutions including power quality monitoring devices, software platforms, and measurement instrumentation. Operating globally and serving clients in more than 50 countries, the company helps organizations optimize energy systems, improve operational efficiency, and enhance sustainability across various sectors."
  },
  {
    "Name": "FlytBase",
    "Organizations": "FlytBase <flytbase.com>",
    "Description [Organization]": "FlytBase is an enterprise-grade drone automation software platform headquartered in Redwood City, California. The company provides drone agnostic software solutions that enable fully automated and cloud-connected commercial drone operations. Its platform allows users to conduct scheduled drone flights with minimal human intervention, using remote command centers and automated docking stations. FlytBase supports integration with third-party applications, offers robust data security, and provides solutions for industries including transportation, construction, and public safety."
  },
  {
    "Name": "Skyfish",
    "Organizations": "Skyfish <skyfish.ai>",
    "Description [Organization]": "Skyfish is a specialized drone technology company that designs and manufactures comprehensive unmanned aerial vehicle (UAV) solutions for commercial and industrial applications. The company develops a complete drone platform technology stack, including custom onboard computers, remote controllers, carbon composite airframes, battery systems, ground stations, and advanced flight planning and navigation software. Their platform supports industry-standard sensors and offers unique data processing, 3D modeling, and mapping capabilities, with a focus on creating reliable drone systems for sectors like transportation, defense, and telecommunications. Skyfish provides tailored drone solutions that enable precise photogrammetry, infrastructure mapping, and geospatial data collection using technologies like LiDAR."
  },
  {
    "Name": "Volta Insite",
    "Organizations": "Volta Insite <voltainsite.com>",
    "Description [Organization]": "Volta Insite is an advanced IoT platform specializing in electrical asset monitoring and optimization across multiple industries including manufacturing, healthcare, and energy. Using their proprietary InsiteAI\u2122 technology, the company provides real-time continuous monitoring, predictive maintenance, and performance optimization for electrical systems. Their solutions help businesses reduce operational downtime, improve asset longevity, and make data-driven decisions about infrastructure maintenance, with a focus on preventing potential system failures before they occur."
  },
  {
    "Name": "eSmart Systems",
    "Organizations": "eSmart Systems <esmartsystems.com>",
    "Description [Organization]": "eSmart Systems is an AI-powered infrastructure management technology company specializing in digital solutions for utility operators. Their flagship product, Grid Vision\u00ae, revolutionizes power grid asset inspection and maintenance through advanced artificial intelligence. The platform provides comprehensive grid asset intelligence, including virtual inspections, real-time risk detection, and automated maintenance workflows. By integrating data from multiple sources, eSmart Systems helps utilities optimize infrastructure management, reduce inspection costs, improve safety, and extend asset life across transmission and distribution networks globally."
  },
  {
    "Name": "Skyqraft",
    "Organizations": "Skyqraft <skyqraft.com>",
    "Description [Organization]": "Skyqraft is a Swedish technology company using artificial intelligence to revolutionize infrastructure grid inspection and maintenance. Their AI-powered platform provides visual data analytics for utility companies, converting aerial grid images into actionable management insights. By analyzing high-resolution photos, thermal images, and LiDAR technology, Skyqraft enables predictive intelligence for power grid maintenance, helping organizations minimize risks, improve operational uptime, and reduce maintenance costs. An award-winning startup, Skyqraft serves influential critical infrastructure organizations with innovative, sustainable grid inspection solutions."
  },
  {
    "Name": "Hepta",
    "Organizations": "Hepta Airborne <heptainsights.com>",
    "Description [Organization]": "Hepta Insights is an advanced technology platform specializing in power line inspection solutions for network operators. Utilizing AI-enhanced software and integrating data from sources like drone imagery and LiDAR, the company enables utility companies to conduct efficient, accurate network inspections. Their solution allows for rapid defect detection, significantly reducing inspection cycles and maintenance costs. Currently serving over 30 utility companies across 21 countries, Hepta provides comprehensive inspection services that combine smart software, rich analytics, and specialist support."
  },
  {
    "Name": "NextEra Analytics",
    "Organizations": "NextEra Analytics <nexteraanalytics.com>",
    "Description [Organization]": "NextEra Analytics is a renewable energy consulting firm specializing in energy optimization and project planning. The company offers a comprehensive energy management software platform called NextERA 360, which leverages advanced data analytics to help clients optimize energy assets, reduce costs, and achieve sustainability goals. Their services involve analyzing approximately 23 billion data points daily, with expertise across renewable energy projects, focusing on helping businesses accelerate their decarbonization journey through sophisticated energy strategies and data-driven insights."
  },
  {
    "Name": "Metron",
    "Organizations": "METRON <metron.energy>",
    "Description [Organization]": "METRON is a French CleanTech company founded in 2013, specializing in digital energy management and optimization solutions for industrial and service sector clients. The company provides an AI-powered Energy Management & Optimization System (EMOS) platform that helps organizations reduce energy consumption, costs, and carbon footprint. Operating across Europe, Latin America, Middle East, and Asia, METRON supports over 200 international industrial groups including Danone and ArcelorMittal. Their digital platform enables real-time energy performance tracking, carbon impact measurement, and provides actionable insights to accelerate sustainability strategies."
  },
  {
    "Name": "Verdigris",
    "Organizations": "Verdigris <verdigris.co>",
    "Description [Organization]": "Verdigris is an AI-powered energy management platform that helps commercial buildings and data centers optimize their electrical systems and reduce energy consumption. Using advanced IoT-enabled sensors and artificial intelligence, the company captures detailed energy data at the circuit level, providing real-time insights into equipment efficiency, predictive maintenance, and energy usage. The platform automates control adjustments, helps reduce carbon emissions, and enables facility managers to cut energy costs and improve operational reliability. Deployed in 17 countries, Verdigris serves Fortune 500 enterprises and has been recognized for innovation in energy management technology."
  },
  {
    "Name": "Eliq",
    "Organizations": "Eliq <eliq.com>",
    "Description [Organization]": "Eliq is an energy data platform that helps utilities, banks, and smart home providers drive digital transformation in the home energy sector. Their SaaS platform leverages AI and customer interaction data to generate personalized insights that empower customers to make intelligent, sustainable energy choices. The platform supports energy providers across 15+ markets, analyzing billions of data points to create personalized energy consumption patterns. Key features include a White Label Energy Insights App, a powerful API, and tools for managing renewable energy projects like solar panel disaggregation, ultimately aiming to enhance customer engagement, reduce operational costs, and support the transition to sustainable energy."
  },
  {
    "Name": "Energyworx",
    "Organizations": "Energyworx <energyworx.com>",
    "Description [Organization]": "Energyworx is a cloud-native energy data management platform that helps utilities transform massive volumes of data from smart meters, IoT devices, and other sources. The platform provides comprehensive meter data management solutions for distribution system operators and retailers, offering automated data ingestion, processing, and analytics. Key features include API-first architecture, bi-weekly updates, data quality management, and scalable cloud infrastructure. Energyworx enables utilities to validate, estimate, and analyze energy consumption data, supporting core processes like settlement, billing, profiling, and forecasting. Headquartered in the Netherlands with a branch in Houston, Texas, the company serves global innovative utilities like ENGIE and EDP."
  },
  {
    "Name": "Watt Analytics",
    "Organizations": "Watt Analytics <watt-analytics.com>",
    "Description [Organization]": "Watt Analytics is a cloud-based energy management system that uses artificial intelligence and machine learning to analyze, forecast, and control power consumption in real-time. The platform enables users to optimize energy usage for private households and small to medium-sized businesses, with a goal of reducing power consumption by 20%. Its innovative system includes a high-resolution meter, cloud server, mobile app, and dashboard that provides detailed energy consumption insights, supports non-invasive load monitoring, and offers smart alerting features to help users make informed decisions about their energy use."
  },
  {
    "Name": "Zaphiro Technologies",
    "Organizations": "Zaphiro Technologies <zaphiro.ch>",
    "Description [Organization]": "Zaphiro is a pioneering Swiss deep tech company specializing in smart grid solutions, specifically grid monitoring and automation technologies. As an official spin-off from the Swiss Federal Institute of Technology (EPFL), the company has developed SynchroGuard, an advanced distribution grid monitoring system using Phasor Measurement Unit (PMU) technology. Their solution provides full grid visibility, supports renewable energy and electric vehicle integration, and helps reduce blackout risks through unique fault location algorithms, positioning themselves as an innovative player in the energy transition sector."
  },
  {
    "Name": "Arkion",
    "Organizations": "Arkion <arkion.co>",
    "Description [Organization]": "Arkion is a Swedish technology company using artificial intelligence to transform power grid infrastructure management. Their cloud-based platform provides comprehensive asset intelligence by processing inspection data including images, thermal scans, and LiDAR to generate precise insights into grid conditions. Focused on enabling a net-zero future, Arkion helps electric utilities transition to condition-based asset assessments, supporting more resilient, sustainable, and cost-efficient grid operations through advanced predictive maintenance and risk minimization technologies."
  },
  {
    "Name": "Fulcrum",
    "Organizations": "Fulcrum <fulcrumapp.com>",
    "Description [Organization]": "Fulcrum is a field data collection and process management SaaS platform designed to help organizations streamline mobile business processes. The platform enables non-developers to rapidly build and deploy apps for data collection, workflow automation, and analytics. Key features include AI-powered tools for automated data entry, geospatial tracking, offline functionality, and seamless integration with GIS systems. Trusted by over 30,000 users across industries like utility, construction, and agriculture, Fulcrum enhances data accuracy, ensures compliance, and drives digital transformation for field teams."
  },
  {
    "Name": "Guru Systems",
    "Organizations": "Guru Systems <gurusystems.com>",
    "Description [Organization]": "Guru Systems is a technology company specializing in intelligent energy systems solutions, focusing on heat network performance and decarbonization. They provide market-leading hardware and data analytics platforms for heat networks, gas boilers, and heat pumps. Their technology captures and analyzes utility data to improve system efficiency, enable remote configuration, and support the transition to low-carbon heating solutions. Founded to address the challenges of net-zero emissions, the company offers tools for residential developers, heat suppliers, and customers to enhance energy system transparency, reduce costs, and minimize carbon emissions."
  },
  {
    "Name": "Sereema",
    "Organizations": "Sereema <sereema.com>",
    "Description [Organization]": "Sereema is a green technology company specializing in wind turbine optimization through its Windfit digital solution. The platform provides autonomous, real-time monitoring and performance analysis for wind farms, enabling operators to detect and correct issues like rotor imbalances and yaw misalignment. Using smart sensors and cloud-based analytics, Windfit helps wind farm owners maximize energy production, extend turbine lifespans, and efficiently manage increasingly complex renewable energy portfolios. The company supports over 1.8GW of wind energy infrastructure across Europe."
  },
  {
    "Name": "Amperecloud",
    "Organizations": "Amperecloud <amperecloud.com>",
    "Description [Organization]": "Amperecloud is a software platform specializing in solar energy asset management, providing comprehensive cloud-based solutions for solar power plant monitoring and operations. The platform offers real-time monitoring, remote operational control, and regulatory compliance tools for solar energy projects. Key features include certified data logging, automated monitoring systems, and seamless integration with existing infrastructure, enabling solar companies to optimize project management, improve operational efficiency, and streamline energy asset performance."
  },
  {
    "Name": "Autani",
    "Organizations": "Autani <autani.com>",
    "Description [Organization]": "Autani is an American-based building automation provider specializing in energy management systems for facilities of various sizes. The company offers an integrated IoT platform that helps organizations optimize energy consumption through smart building technologies, including advanced controls for HVAC, lighting, metering, and sensors. Autani's solutions enable real-time energy monitoring, reporting, and management to enhance operational efficiency and building occupant comfort."
  },
  {
    "Name": "VEPO Solutions",
    "Organizations": "VEPO Solutions <veposolutions.com>",
    "Description [Organization]": "VEPO Solutions is a software and services company specializing in water utility technology solutions. Located in NYC, the company offers four distinct business units: VPie (data collection platform), VEPO Metering (water meter installations), VEPO Analytix (meter data management), and VEPO CrossConnex (backflow management software). Their integrated solutions help water utilities with advanced metering infrastructure, data management, compliance reporting, and field service optimization across the United States."
  },
  {
    "Name": "Smartside",
    "Organizations": "SmartSide <smart-side.com>",
    "Description [Organization]": "SmartSide is an information technology company specializing in Smart Metering and Smart Grids solutions. Their flagship product, SmartEnergyCore Software, is a comprehensive platform designed for utility companies, energy service providers, and cities to manage energy consumption data. The system processes data from various energy sources including electricity, water, gas, and public lighting, and integrates environmental data from sensors for waste management and pollution detection. SmartSide offers a flexible information system capable of handling large numbers of meters and probes, providing consulting services to support clients in optimizing energy network operations and implementing smart metering technologies."
  },
  {
    "Name": "Myrspoven",
    "Organizations": "Myrspoven <myrspoven.com>",
    "Description [Organization]": "Myrspoven is a Swedish technology company founded in 2017 that specializes in AI-driven energy optimization solutions for buildings. Their core platform, myCore, uses advanced data analytics and artificial intelligence to optimize heating, cooling, and energy systems in real estate. By analyzing real-time operational data and weather conditions, Myrspoven helps property owners reduce energy costs, lower carbon emissions, and improve overall building sustainability. Since January 2023, their solution has optimized over 2,500,000 square meters across more than 1,000 buildings, with a vision to contribute to global carbon footprint reduction in the real estate industry."
  },
  {
    "Name": "Utilismart Corporation",
    "Organizations": "Utilismart Corporation <utilismartcorp.com>",
    "Description [Organization]": "Utilismart Corporation is a technology company specializing in digital transformation for utilities, providing cloud-based meter data management (MDM) and advanced metering infrastructure (AMI) solutions. Their platform enables real-time decision-making for utilities, municipalities, and commercial customers by offering comprehensive services including grid visualization, outage management, billing, asset tracking, and data analytics. With over 20 years of experience, Utilismart delivers software-as-a-service solutions that help organizations optimize grid operations, enhance efficiency, and manage complex utility data across Canada and North America."
  },
  {
    "Name": "Cuculus",
    "Organizations": "Cuculus <cuculus.com>",
    "Description [Organization]": "Cuculus is a German software company specializing in IoT solutions for the energy sector since 2007. Their core offering is the ZONOS\u2122 IoT Platform, which enables management of smart meters, grid infrastructure, and energy distribution for utilities. The platform can connect and process data from millions of devices, providing tools for energy management, grid balancing, and resource protection. With offices in Ilmenau, Leipzig, and Erfurt, Cuculus collaborates closely with system integrators, device manufacturers, and software vendors to develop tailored solutions that address key challenges in energy markets worldwide."
  },
  {
    "Name": "Green Energy Options",
    "Organizations": "Green Energy Options <geotogether.com>",
    "Description [Organization]": "Green Energy Options (geo) is a home energy technology company founded in 2006 that develops smart, connected energy monitoring devices and systems. Their mission is to help consumers understand and control their home energy consumption through innovative products across three categories: Smarter Energy, Smarter Living, and Smarter Power. The company creates integrated building energy management systems that reduce energy costs, increase home comfort, and enable consumers to become active participants in a flexible, smart energy ecosystem."
  },
  {
    "Name": "Runwise",
    "Organizations": "Runwise <runwise.com>",
    "Description [Organization]": "Runwise is a wireless building control platform that provides an end-to-end boiler and heating system management solution. The company combines proprietary hardware, a sensor network, and machine learning systems to help building owners reduce fuel consumption by 20-25%. Serving over 6,000 buildings in New York City, Runwise offers remote infrastructure monitoring, safety management, and energy optimization through a single integrated interface. The platform provides rapid deployment with payback in under five months, helping customers save on energy costs while improving tenant comfort and reducing carbon output."
  },
  {
    "Name": "Ellona",
    "Organizations": "Ellona <ellona.io>",
    "Description [Organization]": "Ellona is an environmental intelligence company specializing in advanced monitoring solutions using artificial intelligence and sensor technologies. Founded in 2016 and headquartered in Toulouse, France, the company develops sophisticated IoT devices and AI-powered platforms for real-time tracking of environmental parameters including air quality, gas emissions, odors, and particulate matter. Their solutions serve diverse industries such as wastewater treatment, construction, healthcare, and industrial sectors, providing actionable environmental data to help businesses improve sustainability, operational efficiency, and regulatory compliance."
  },
  {
    "Name": "Building Intelligence Solutions (Bisly)",
    "Organizations": "Bisly <bisly.com>",
    "Description [Organization]": "Bisly provides intelligent building automation solutions that enhance energy efficiency and operational control for residential and commercial spaces. Founded in 2018, the platform integrates multiple building systems including HVAC, lighting, security, and access control into a single cloud-based system. The solution is scalable, easy to install, requires no coding, and supports remote energy management. Bisly has completed over 1,000 projects across various sectors, offering cost-effective smart home and building solutions that improve comfort, energy savings, and system communication."
  },
  {
    "Name": "TerraGo Technologies",
    "Organizations": "TerraGo Technologies <terragotech.com>",
    "Description [Organization]": "TerraGo is a software solutions company providing no-code applications for field operations, particularly in smart cities, utilities, defense, and intelligence sectors. The company develops geospatial intelligence products used by major utilities, government agencies, and organizations across 50 US states and over 70 countries. Their platform enables efficient data collection, information sharing, and integrated asset management, with key capabilities including real-time tracking, automated maintenance processes, and customized applications that streamline operational efficiency for diverse organizational needs."
  },
  {
    "Name": "75F",
    "Organizations": "75F <75f.io>",
    "Description [Organization]": "75F is a technology company specializing in IoT-based smart building management solutions, focusing on enhancing energy efficiency and indoor air quality for commercial spaces. Founded in 2012 and headquartered in Minnesota, the company offers an integrated hardware and software system that uses smart sensors and machine learning to optimize HVAC, lighting, and building controls. Their solution provides predictive automation, delivering an average of 41.8% energy savings across various commercial sectors including offices, retail, and multi-family spaces, with operations in the United States, India, and Singapore."
  },
  {
    "Name": "Grid4C",
    "Organizations": "Grid4C <grid4c.com>",
    "Description [Organization]": "Grid4C is an AI-powered energy analytics company that provides predictive solutions for energy providers and consumers. Using advanced machine learning, the company analyzes massive amounts of data from smart meters and IoT devices to deliver granular predictions and insights. Their platform offers comprehensive solutions including Predictive Home Advisor for appliance fault detection, Predictive Operational Analytics for distributed energy resource coordination, and Predictive Customer Analytics for utility program adoption. Grid4C helps energy industry participants optimize operations, enhance customer engagement, improve efficiency, and generate new revenue streams by leveraging sophisticated data analysis and machine learning capabilities."
  },
  {
    "Name": "ThoughtWire",
    "Organizations": "ThoughtWire <thoughtwire.com>",
    "Description [Organization]": "ThoughtWire is a software company focused on smart building and urban technology solutions. Founded in 2009, they specialize in digital twin technology that orchestrates data from people, processes, and physical environments to create smarter, safer, and more efficient spaces. Their platform enables intelligent automation for hospitals, commercial buildings, and cities, using real-time data integration, IoT devices, and contextual analytics to improve operational efficiency and user experiences."
  },
  {
    "Name": "Clir",
    "Organizations": "Clir Renewables <clir.eco>",
    "Description [Organization]": "Clir Renewables is a Software as a Service (SaaS) company in the renewable energy sector that provides an AI-powered intelligence platform for managing wind, solar, and battery energy storage projects. Founded in 2017 and headquartered in Vancouver, Canada, the company leverages a comprehensive operational dataset of over 200 GW to help investors and asset managers optimize renewable energy production. Their cloud-based platform offers advanced analytics, actionable insights, and tools to increase annual energy production by up to 5%, extend asset life, reduce consultancy fees, and improve workflow efficiency across Europe, Africa, the Americas, and Asia."
  },
  {
    "Name": "ONYX Insight",
    "Organizations": "ONYX InSight <onyxinsight.com>",
    "Description [Organization]": "ONYX Insight is a global renewable technology company specializing in predictive analytics and monitoring solutions for wind turbine operators. With 7 global offices and 10 patents, the company provides advanced condition monitoring services that help renewable energy asset owners optimize performance and reduce maintenance costs. Their technology enables real-time monitoring of turbine health, predictive maintenance, and comprehensive fleet management across 35 countries, supporting over 28,000 turbines. Part of the BP family since 2017, ONYX Insight delivers unbiased analytics to minimize unplanned downtime and maximize investment returns in the wind energy sector."
  },
  {
    "Name": "BrainBox AI",
    "Organizations": "BrainBox AI <brainboxai.com>",
    "Description [Organization]": "BrainBox AI is a Montreal-based software company specializing in autonomous building management technology. Using deep learning, cloud-based computing, and proprietary algorithms, the platform enables 24/7 self-operating building systems that optimize energy efficiency. Their technology can reduce total energy costs by up to 25%, improve occupant comfort by 60%, and decrease building carbon footprints by 20-40%. The platform automates HVAC optimization, provides actionable insights, and supports sustainable building management with minimal capital investment."
  },
  {
    "Name": "Entouch",
    "Organizations": "EnTouch Controls <entouchcontrols.com>",
    "Description [Organization]": "EnTouch Controls is an energy management technology company providing cloud-based solutions for multi-site businesses across various sectors including retail, healthcare, and hospitality. Their IoT-powered smart building platform offers comprehensive energy management services, focusing on reducing energy consumption, optimizing operational efficiency, and supporting sustainability goals. The company's turnkey solution enables businesses to monitor and control HVAC, lighting, and refrigeration systems through a single cloud platform, driving profitability while promoting environmental responsibility."
  },
  {
    "Name": "Ndustrial",
    "Organizations": "ndustrial.io <ndustrial.io>",
    "Description [Organization]": "Ndustrial is an energy management technology platform that helps industrial facilities optimize energy efficiency and reduce costs. The company's solution integrates over 60 different systems to process more than 100 million data points daily, enabling real-time energy tracking and automated savings opportunities. Using AI-powered analytics and a production-first approach, Ndustrial helps clients reduce energy intensity, decrease operational expenses, and enhance sustainable operations across industrial facilities. The platform provides comprehensive insights through cloud-based applications, load control solutions, and solar dashboard integrations that support digital transformation and resource efficiency for manufacturing and industrial enterprises."
  },
  {
    "Name": "MeteoControl",
    "Organizations": "meteocontrol <meteocontrol.com>",
    "Description [Organization]": "Meteocontrol is a leading independent developer of energy and asset management solutions for renewable energy, particularly photovoltaic (PV) systems. Established in 1998 and headquartered in Augsburg, Germany, the company offers comprehensive monitoring, control, and energy management solutions for PV projects worldwide. Their services include advanced software platforms like VCOM Cloud, precise data loggers, solar power forecasting, technical consulting, and asset management solutions that help investors and operators optimize renewable energy portfolios across 150 countries."
  },
  {
    "Name": "AssetWatch",
    "Organizations": "AssetWatch <assetwatch.com>",
    "Description [Organization]": "AssetWatch provides a predictive maintenance platform that utilizes advanced sensor technologies to monitor machine health and enable proactive maintenance strategies. The solution offers continuous monitoring using vibration, temperature, and performance data to identify potential equipment issues before they cause downtime. Designed for industries including manufacturing, chemical, and food and beverage, the platform helps organizations make informed maintenance decisions, reduce operational risks, and optimize asset reliability through real-time predictive insights and comprehensive health assessments."
  },
  {
    "Name": "Twaice",
    "Organizations": "TWAICE <twaice.com>",
    "Description [Organization]": "TWAICE is a leading battery analytics software company that provides predictive technology for optimizing lithium-ion battery performance across automotive and energy storage industries. Using a sophisticated digital twin technology that combines deep battery knowledge with artificial intelligence, the company helps clients maximize battery lifecycle, performance, and safety. Founded in 2018 and headquartered in Munich, TWAICE supports major clients like Porsche, Mercedes-Benz, and ChargePoint, offering solutions that generate actionable insights for battery development, operations, and risk management."
  },
  {
    "Name": "Everactive",
    "Organizations": "Everactive <everactive.com>",
    "Description [Organization]": "Everactive is an innovative IoT technology company that develops self-powered wireless sensor systems powered exclusively by harvested micro-renewable energy. The company provides a comprehensive IoT platform with batteryless sensors that generate continuous data streams for industrial applications. Its proprietary low-power energy harvesting and wireless communication technology enables always-on IoT systems that can operate without traditional batteries, delivering scalable and sustainable solutions for monitoring and analyzing environmental data across entire facilities. Everactive offers end-to-end services including hardware toolkits, managed network infrastructure, and cloud-based analytics to help businesses optimize operational efficiency and reduce maintenance costs."
  },
  {
    "Name": "Carbon Lighthouse",
    "Organizations": "Carbon Lighthouse <carbonlighthouse.com>",
    "Description [Organization]": "Carbon Lighthouse is an energy efficiency technology company that helps commercial real estate owners reduce carbon emissions and generate new revenue streams. Their platform identifies and corrects hidden energy inefficiencies in buildings, delivering financial and sustainability benefits. The company provides software and financial products that help property owners increase net operating income, reduce operational expenses, and achieve sustainability goals across commercial, educational, hospitality, and retail sectors."
  },
  {
    "Name": "Invert Robotics",
    "Organizations": "Invert Robotics <invertrobotics.com>",
    "Description [Organization]": "Invert Robotics specializes in remote robotic inspection services for industrial environments, providing non-destructive testing (NDT) technologies for critical infrastructure. Their advanced robotic platforms use vacuum adhesion technology to conduct safe, precise inspections in confined spaces across industries including food production, chemicals, pharmaceuticals, aerospace, and energy. The company's core mission is to eliminate human risk in hazardous industrial inspection scenarios."
  },
  {
    "Name": "Gridium",
    "Organizations": "Gridium <gridium.com>",
    "Description [Organization]": "Gridium is an Energy-Management-as-a-Service platform that helps building owners and operators optimize energy efficiency and reduce operational costs. The company serves approximately 300 million square feet of buildings across the United States, providing AI-driven energy performance analytics, real-time energy data management, and turnkey retrofit solutions to help clients lower utility expenses, improve sustainability, and streamline building maintenance operations."
  },
  {
    "Name": "Vutility",
    "Organizations": "Vutility <vutility.com>",
    "Description [Organization]": "Vutility is an energy technology company providing real-time, high-resolution energy monitoring solutions for businesses. Their innovative IoT hardware and cloud data technologies enable companies across various industries to optimize energy consumption, improve operational efficiencies, and track sustainability commitments. Utilizing wireless, LoRaWAN-enabled energy meters called HotDrops, they offer non-intrusive sensor installations that monitor energy, voltage, power factor, and amperage in commercial buildings, cell towers, and remote sites."
  },
  {
    "Name": "Logical Buildings",
    "Organizations": "Logical Buildings <logicalbuildings.com>",
    "Description [Organization]": "Logical Buildings is an industry leading sustainability, smart building and virtual powerplant software and solutions provider for the built world. Our revolutionary technologies are combatting climate change by empowering residential, commercial, and industrial energy users to earn money, enhance building health and reduce carbon footprint, all from within user-friendly, award-winning mobile apps. Founded in 2012, the company now operates in major national urban markets, such as New York, Boston, Dallas, Los Angeles, San Francisco, Seattle, Washington, D.C., Camden, Chicago, and Miami, and more. To learn more, visit logicalbuildings.com."
  },
  {
    "Name": "SYSO Technologies",
    "Organizations": "Syso Technologies <sysotechnologies.com>",
    "Description [Organization]": "SYSO Technologies is a renewable energy asset management company focused on transforming the power grid by supporting clean energy transitions. Specializing in managing solar, storage, and renewable power assets, the company provides a cloud-based Energy Management Platform that helps asset owners maximize the profitability and operational efficiency of renewable energy investments. Their technology enables active management of renewable generators, navigates complex power markets, and supports the broader goal of reducing fossil fuel dependency through advanced asset management and forecasting tools."
  },
  {
    "Name": "Clir Renewables",
    "Organizations": "Clir Renewables <clir.eco>",
    "Description [Organization]": "Clir Renewables is a Software as a Service (SaaS) company in the renewable energy sector that provides an AI-powered intelligence platform for managing wind, solar, and battery energy storage projects. Founded in 2017 and headquartered in Vancouver, Canada, the company leverages a comprehensive operational dataset of over 200 GW to help investors and asset managers optimize renewable energy production. Their cloud-based platform offers advanced analytics, actionable insights, and tools to increase annual energy production by up to 5%, extend asset life, reduce consultancy fees, and improve workflow efficiency across Europe, Africa, the Americas, and Asia."
  },
  {
    "Name": "Exergy Energy",
    "Organizations": "Exergy Energy <exergyenergy.com>",
    "Description [Organization]": "Exergy Energy is a concierge utility service providing comprehensive renewable energy solutions for mission-critical organizations. The company specializes in delivering 100% renewable energy, onsite backup and standby generation, and energy efficiency services. Their approach allows businesses to meet sustainability goals, improve energy resilience, and reduce operational costs without requiring upfront capital investment. Exergy Energy offers services including energy procurement, facility electrification, and carbon footprint measurement, targeting organizations seeking reliable and sustainable energy management."
  },
  {
    "Name": "Faclon Labs",
    "Organizations": "Faclon Labs <faclon.com>",
    "Description [Organization]": "Faclon Labs is an industrial IoT and data analytics company that specializes in leveraging sensor data and AI to drive operational excellence across various industries. Their core platform, I/O Sense, enables real-time monitoring, predictive insights, and process automation for factories, utilities, and smart city infrastructure. Headquartered in Mumbai and founded by IIT-Bombay alumni, the company provides end-to-end IoT solutions including hardware, sensors, and software, with over 10,000 connected assets and the ability to manage 8 billion daily data points. Their technology helps businesses optimize productivity, reduce maintenance costs, and improve operational efficiency through advanced data science and autonomous actions."
  },
  {
    "Name": "Accuenergy Inc.",
    "Organizations": "Accuenergy <accuenergy.com>",
    "Description [Organization]": "Accuenergy is a Toronto-based company founded in 1998 that specializes in designing and manufacturing industrial power and energy metering solutions. The company produces a comprehensive range of products including multifunction power meters, current transformers, hall effect sensors, and energy management software. Serving diverse sectors such as industrial, alternative energy, transportation, utilities, and commercial real estate, Accuenergy provides advanced metering technologies with a global network of offices. The company is committed to quality, holding multiple certifications including UL, CE Mark, and ISO 9001:2008, and offers cloud-based energy management platforms like AcuCloud for real-time data collection and reporting."
  },
  {
    "Name": "Kayrros",
    "Organizations": "Kayrros <kayrros.com>",
    "Description [Organization]": "Kayrros is an environmental intelligence company that leverages advanced satellite imagery, AI, and data analytics to provide critical insights into energy, climate, and sustainability challenges. Founded in 2016, the company uses cutting-edge technologies including machine learning, natural language processing, and advanced mathematics to deliver actionable intelligence about global assets and environmental impacts. Their platform supports various sectors including finance, government, and energy by offering independent measurements of human activity's carbon footprint and providing strategic insights for the energy transition."
  },
  {
    "Name": "Tutenlabs",
    "Organizations": "Tutenlabs <tutenlabs.com>",
    "Description [Organization]": "Tutenlabs is a technology company that digitalizes and optimizes mobile workforce activities and processes. They provide smart facility and energy management solutions using IoT and AI technologies to improve operational efficiency and sustainability across various industries, particularly retail. Their platform offers advanced monitoring, building management systems, and consulting services to help organizations streamline operations, enhance energy efficiency, and make data-driven decisions."
  },
  {
    "Name": "Splight Inc",
    "Organizations": "Splight <splight.com>",
    "Description [Organization]": "Splight is a software technology company focused on enhancing grid reliability and transmission capacity for energy systems. Using real-time data and machine learning, the company helps increase grid transmission capacity by two times, integrating with existing energy infrastructure to reduce congestion and improve generation and load operations. The technology provides predictive analytics, real-time monitoring of grid interconnection, and tools for managing renewable energy generation, offering a scalable and cost-effective solution for transmission owners and utilities."
  },
  {
    "Name": "ACCURE Battery Intelligence Inc.",
    "Organizations": "ACCURE - Battery Intelligence <accure.net>",
    "Description [Organization]": "Accure is a battery intelligence company providing predictive analytics solutions for energy storage and electric vehicle battery systems. Their cloud-based platform uses artificial intelligence and expert battery knowledge to enhance safety, reliability, and performance of battery technologies. The software helps manufacturers and operators monitor battery health, optimize lifecycle management, and reduce risks across various industries including automotive and energy storage. Currently serving over 2 GWh of battery systems globally, Accure offers comprehensive insights into battery performance, aging, and warranty management."
  },
  {
    "Name": "Verse",
    "Organizations": "Verse <verse.inc>",
    "Description [Organization]": "Verse is an enterprise energy management SaaS platform designed to help organizations transition to clean energy and manage sustainability goals. Using advanced data science and AI-powered technologies, the platform assists companies in planning, procuring, and operating clean energy assets. It provides real-time data analysis, automated reporting, and strategic insights that enable businesses to reduce energy costs, manage emissions, and achieve net-zero objectives without relying on renewable energy credits or carbon offsets."
  },
  {
    "Name": "GlacierGrid",
    "Organizations": "GlacierGrid <glaciergrid.com>",
    "Description [Organization]": "GlacierGrid is an energy management technology company that provides innovative solutions to reduce food waste, energy consumption, and equipment downtime across multiple industries including restaurants, education, and retail. Their platform offers real-time monitoring of HVAC systems, refrigeration, and temperature control through a mobile app that integrates energy, asset, and resource data. Key features include smart scheduling for asset operations, energy pattern insights, and sustainability reporting at both location and organizational levels. The company focuses on helping businesses maximize profits and savings while contributing to environmental sustainability and reducing carbon footprints."
  },
  {
    "Name": "Transect",
    "Organizations": "Transect <transect.com>",
    "Description [Organization]": "Transect is a SaaS platform providing environmental due diligence and site selection solutions for renewable energy, utilities, oil and gas, and infrastructure projects. The software offers rapid environmental risk assessment, real-time data analysis, and comprehensive insights into potential project sites. Founded in 2016 in San Antonio, Transect helps developers quickly identify environmental constraints, navigate permit requirements, and make informed decisions about land use. The platform features automated land assessments, a database of over 3,000 sites, and tools for analyzing issues like wetlands, endangered species, and cultural resources."
  },
  {
    "Name": "Bueno",
    "Organizations": "Bueno <buenoanalytics.com>",
    "Description [Organization]": "Bueno is a global smart building analytics platform designed to enhance energy management and sustainability for commercial real estate and grocery properties. The platform collects and analyzes data from operational equipment like HVAC, refrigeration, lighting, and vertical transportation. By providing comprehensive reports and insights, Bueno helps building owners, operational teams, and sustainability professionals optimize their built environments, potentially reducing energy consumption by 20-40% and supporting carbon footprint reduction efforts."
  },
  {
    "Name": "Sun-Net Inc.",
    "Organizations": "Sun-Net <sunnetsoftware.com>",
    "Description [Organization]": "Sun-Net Inc. is a specialized software development and consulting company focused on the power utility industry since 1999. Their flagship product, the iTOA software suite, provides comprehensive enterprise solutions for utility operations, including outage coordination, scheduling, electronic logging, and reporting. The platform supports electric, gas, and water utilities by offering advanced tools for system operation processes, from long-term planning to real-time logging, with capabilities for ISO/RTO communication and NERC reporting."
  },
  {
    "Name": "LandGate\u00ae Corp",
    "Organizations": "LandGate <landgate.com>",
    "Description [Organization]": "LandGate is a technology platform providing comprehensive information and marketplace solutions for commercial land resources in the United States. Founded in 2016 in Denver, Colorado, the platform connects landowners, real estate agents, and investors with opportunities in renewable energy, minerals, water, and carbon markets. Their online marketplace offers property valuation, data analytics, and transaction tools, helping users understand and monetize land resource values. The platform uses advanced technology to automate data tasks, provide market insights, and reduce investor costs through a network of real estate professionals and energy experts."
  },
  {
    "Name": "TCS | Building Automation Systems",
    "Organizations": "TCS <tcsbasys.com>",
    "Description [Organization]": "TCS Building Automation Systems is a leading provider of HVAC controls and energy management solutions for small to mid-sized facilities. Specializing in scalable and affordable solutions for multi-site enterprises, the company serves major clients including Wells Fargo, HSBC, Sephora, and the US military. With over 40 years of experience, TCS offers state-of-the-art building controls, a secure energy management software platform, and professional installation services. Their Ubiquity Cloud platform enables centralized management of HVAC systems, helping businesses optimize energy usage, improve operational efficiency, and reduce costs across branch banks, restaurants, retail stores, and commercial properties."
  },
  {
    "Name": "Sunwise",
    "Organizations": "Sunwise <sunwise.io>",
    "Description [Organization]": "Sunwise is a technology platform designed for the solar energy market, providing comprehensive software solutions for photovoltaic system integrators. The platform automates and streamlines solar project management, offering tools for sales organization, savings calculation, installation coordination, and performance tracking. It supports residential, commercial, and industrial solar sectors by reducing manual processes, minimizing errors, and enhancing operational efficiency through advanced technological integration."
  },
  {
    "Name": "Atmospheric G2",
    "Organizations": "Atmospheric G2 <atmosphericg2.com>",
    "Description [Organization]": "Atmospheric G2 is a weather intelligence platform headquartered in Manchester, NH that provides global weather and environmental insights for risk management in energy trading. The company acquired WSI Trader in June 2021 and operates with a team of meteorology experts, climate industry specialists, and data analytics professionals. Their platform, AG2 Trader, offers customizable weather forecasts for up to 15 days across North America, Europe, Asia, and Australia with hourly or daily resolution. The service includes advanced analytics for energy demand analysis, historical weather data, GRAF models, temperature forecasts, and API integration capabilities, serving customers in energy trading, asset management, and risk assessment applications."
  },
  {
    "Name": "Ohm Analytics",
    "Organizations": "Ohm Analytics <ohmanalytics.com>",
    "Description [Organization]": "Ohm Analytics is a data solutions provider focused on driving clean energy adoption through comprehensive market intelligence. The company's platform aggregates data from multiple sources to provide real-time insights into distributed energy markets, with a particular emphasis on solar, storage, EV charging, and electrification industries. Their Solar Data Platform offers a proprietary database of U.S. solar projects, and their Solar Index provides market visibility frequently cited by leading industry news sources."
  },
  {
    "Name": "Zero Trace Procurement (ZTP)",
    "Organizations": "ZTP <ztpuk.com>",
    "Description [Organization]": "ZTP is an energy management and brokerage company specializing in comprehensive utilities management services for organizations. Founded in 2011, they provide cutting-edge software solutions and procurement support for energy-intensive sectors including retail, industrial, real estate, and leisure. Their services include energy contract management, cost reduction strategies, consumption tracking, and portfolio-wide contract management. ZTP offers Trace, an in-house energy contracts management software designed to help portfolio energy managers identify opportunities for financial and environmental savings across multi-site organizations."
  },
  {
    "Name": "Gorilla",
    "Organizations": "Gorilla <gorilla.co>",
    "Description [Organization]": "Gorilla is a software scale-up focused on transforming the energy retail sector through data-driven solutions. Their cloud-based platform provides advanced pricing, forecasting, and reporting tools that help energy retailers optimize operations, reduce risk, and advance sustainability goals. By automating data collection, transformation, and analysis, Gorilla enables enterprises to unlock the potential of their data, deliver innovative customer offerings, and support the transition to a net-zero future through intelligent, technology-powered energy management solutions."
  },
  {
    "Name": "vilisto GmbH",
    "Organizations": "vilisto GmbH <vilisto.de>",
    "Description [Organization]": "Vilisto is a digital heat management solutions provider targeting non-residential buildings, particularly offices and educational facilities. Their innovative system uses self-learning radiator thermostats with integrated presence detection and learning algorithms to optimize heating efficiency. The technology can reduce heating costs and CO2 emissions by up to 32% through intelligent temperature regulation and centralized property management. Vilisto's solution combines smart hardware with an online platform, enabling precise, automated climate control that improves energy efficiency and reduces operational costs for businesses and public clients."
  },
  {
    "Name": "Modo Energy",
    "Organizations": "Modo Energy <modoenergy.com>",
    "Description [Organization]": "Modo Energy is a comprehensive platform providing insights and data for battery energy storage system (BESS) market analysis. Founded in 2020, the platform offers price forecasts, revenue benchmarking, real-time market screens, and in-depth research for energy and infrastructure professionals. Used by over 3,000 global teams, Modo Energy delivers tools for project finance, investment diligence, and operational strategy in the electrification space, helping businesses make informed decisions about energy storage, renewables, and flexible loads."
  },
  {
    "Name": "Vizcab",
    "Organizations": "Vizcab <vizcab.io>",
    "Description [Organization]": "Vizcab is a French technology company focused on supporting the construction industry's transition to net-zero carbon emissions. Founded in 2015, the company provides a Software-as-a-Service platform that automates carbon footprint assessments for construction projects. Its digital solutions help professionals calculate and manage carbon emissions, ensure compliance with environmental regulations, and make informed decisions throughout a building's lifecycle. Certified and supporting over 200 construction organizations, Vizcab empowers stakeholders to develop more sustainable building strategies."
  },
  {
    "Name": "etalytics GmbH",
    "Organizations": "etalytics <etalytics.com>",
    "Description [Organization]": "Etalytics develops AI-driven software solutions for industrial energy management and optimization. Their flagship platform, etaONE, helps companies in automotive, pharmaceutical, and data center industries analyze and optimize energy systems in real-time. The software provides predictive analytics, energy consumption forecasting, and dynamic system control, enabling clients to reduce energy costs by up to 50%, minimize CO2 emissions, and improve operational stability. Deployed in large-scale facilities for companies like Volkswagen, Merck, and Sanofi, Etalytics combines advanced research with practical energy intelligence technologies."
  },
  {
    "Name": "Drishya AI Labs",
    "Organizations": "Drishya AI Labs <drishya.ai>",
    "Description [Organization]": "Drishya is an AI-based solutions firm with offices in Bangalore and Calgary, specializing in enhancing energy operations through artificial intelligence. The company provides a digital platform that offers real-time data analysis and optimization of industrial plant operations. Key capabilities include automated process simulation, predictive maintenance, digital twin creation, and performance monitoring. Their technology enables remote diagnostics and supports decision-making by integrating existing data and providing actionable insights into plant performance and equipment maintenance."
  },
  {
    "Name": "DALOG Diagnosesysteme GmbH",
    "Organizations": "DALOG <dalog.net>",
    "Description [Organization]": "DALOG is a global provider of cloud-based condition monitoring solutions for industrial equipment maintenance. Founded in 1998 in Augsburg, Germany, the company specializes in developing hardware and software for machine diagnostics, monitoring, and performance optimization. Their diagnostic center serves hundreds of customers worldwide, helping minimize equipment downtime and extend machine life cycles through innovative sensor, data logger, and software technologies."
  },
  {
    "Name": "Hydrogrid",
    "Organizations": "HYDROGRID <hydrogrid.ai>",
    "Description [Organization]": "Hydrogrid offers an automated IoT software platform for hydropower plant management, providing real-time optimization of production planning and dispatch. Their SaaS solution enables power plant owners to increase revenues by up to 16% through strategic alignment with power markets, while reducing operational workload. The platform provides comprehensive features including hydrological modeling, predictive production planning, real-time monitoring, environmental compliance tracking, and automated operational management. It allows hydro operations teams to optimize plant efficiency, enhance decision-making, and improve energy production even with limited resources."
  },
  {
    "Name": "Kelvin",
    "Organizations": "Kelvin <kel.vin>; Kelvin <kelvin.ai>; kelvin <go-kelvin.com>",
    "Description [Organization]": ""
  },
  {
    "Name": "Interact.",
    "Organizations": "Interact. <interactdc.com>",
    "Description [Organization]": "World-leading Data Centre IT Performance and environmental specialists. We deliver software and services in IT hardware performance and optimisation, carbon reduction, energy efficiency and the circular economy. What do we do? We provide data led insights and tools to drive IT performance improvements that help you reduce costs and energy, meet your decarbonisation targets and boost your bottom line. 4 reasons to use Interact: \u2714We are world-leading experts on Data Centre IT performance, the circular economy and product life extension. \u2714We save customers on average 60-75% of their total IT energy and carbon usage. \u2714Our consultancy solutions are delivered through our award-winning, machine-learning analytics software. \u2714We are qualified environmental professionals with expertise in sustainability reporting and framework management. EED, CSRD, GHG"
  },
  {
    "Name": "Syscom BMS",
    "Organizations": "Syscom BMS <syscombms.com>",
    "Description [Organization]": "Syscom Building Management Systems (SYSCOM) is an independent control systems specialist established in 1998, focusing on Building Energy Management Systems (BMS, BEMS) for the building services industry. The company provides expertise in designing, installing, and maintaining environmental and energy management control systems for 'intelligent buildings'. Their services include tailored solutions for energy monitoring, system design, installation, and 24/7 technical support, utilizing best-in-class products with open protocol platforms. They cater to various sectors including government, education, and retail, ensuring optimal building performance and energy efficiency."
  },
  {
    "Name": "Cordyne Inc",
    "Organizations": "Cordyne, Inc <cordyne.com>; Cordyne",
    "Description [Organization]": ""
  },
  {
    "Name": "WindESCo",
    "Organizations": "WindESCo <windesco.com>",
    "Description [Organization]": "WindESCo is a renewable energy technology company founded in 2014 that specializes in wind farm performance optimization. Using advanced Industrial Internet of Things (IIoT) technology, machine learning, and intelligent sensor systems, the company helps wind turbine owners improve asset performance and reduce operational expenses. Their solutions include WindESCo Pulse for comprehensive analytics and Swarm technology for optimizing turbine interactions. The company focuses on leveraging data science and engineering expertise to maximize renewable energy production and reduce the cost of energy for wind farm operators."
  },
  {
    "Name": "AFTI WatchDog",
    "Organizations": "AFTI WatchDog\u00ae <aftiwatchdog.com>",
    "Description [Organization]": "AFTI WatchDog is a remote wellsite monitoring solution for the oil and gas industry, providing virtual site inspection capabilities. The platform enables producers to maximize production and lower operational costs by offering real-time monitoring of well conditions, equipment performance, and environmental parameters. With over 90 oil and gas producers relying on the system across the United States and Canada, WatchDog helps eliminate routine physical wellsite visits through advanced remote monitoring technologies that enhance operational efficiency and prevent potential equipment failures."
  },
  {
    "Name": "Corinex Corp.",
    "Organizations": "Corinex <corinex.com>",
    "Description [Organization]": "corinex is a leading provider of bpl-based grid flexibility solutions, enabling the digitalization of the distribution system where energy consumers connect. our solutions maintain network capacities and steer low-carbon technologies (lcts) to consume local generation. our grid asset management solution utilizes existing grid infrastructure and enables edge computing, high-speed transmission, real-time grid performance data, device management, and security at the edge of the grid. our broadband end-to-end solution, integrates distributed energy devices and enables real-time energy data, analytics and predictive models, with the highest level of security."
  },
  {
    "Name": "Detect",
    "Organizations": "Detect <detectinspections.com>",
    "Description [Organization]": "Detect is a utility technology company developing autonomous systems for power grid management and asset inspection. Their platform, DetectOS, enhances utility asset management by integrating advanced inspection technologies, analytics, and real-time insights. The solution allows users to capture imagery from various devices like drones and smartphones, enabling comprehensive asset analysis. By reducing ground travel and providing detailed deficiency identification, the platform significantly cuts inspection costs (up to 20 times) while improving safety and operational efficiency for utility infrastructure management."
  },
  {
    "Name": "Guidewheel",
    "Organizations": "Guidewheel <guidewheel.com>",
    "Description [Organization]": "Guidewheel is an AI-powered FactoryOps platform designed to enhance manufacturing operations through real-time monitoring and automation. Their plug-and-play technology enables factories to optimize performance by tracking machine operations, reducing downtime, and improving energy consumption. Working with over 100 manufacturers across seven countries, Guidewheel's platform provides predictive maintenance, mobile-accessible operational insights, and helps businesses increase throughput while supporting sustainable manufacturing practices."
  },
  {
    "Name": "Nanoprecise",
    "Organizations": "Nanoprecise <nanoprecise.io>",
    "Description [Organization]": "Nanoprecise is an AI-powered predictive maintenance solution provider specializing in Industrial IoT technology for asset monitoring and condition diagnostics. The company offers an innovative platform that combines advanced sensor technology and AI algorithms to detect machine anomalies, predict potential failures, and optimize industrial asset performance. Their solution provides real-time insights into machine health, enabling early detection of operational changes, reducing downtime, and supporting sustainability goals across various industrial sectors. By extracting multiple data points from a single sensor, Nanoprecise helps companies drive their Industry 4.0 transformation with cost-effective, energy-efficient maintenance strategies."
  },
  {
    "Name": "Neosilica",
    "Organizations": "NeoSilica - Digital Energy Partner <cesneosilica.com>",
    "Description [Organization]": "CES NeoSilica is a renewable energy technology company offering the Neos Unified Renewable Energy Management Platform. Leveraging edge IIoT, cloud, and AI technologies, the company provides optimized performance solutions for solar, wind, battery storage, and green hydrogen assets. As part of a global IT firm with $100 million in revenue, CES NeoSilica serves a diverse international clientele and adheres to ISO 9001, ISO 27001, and CMMI Level 3 certifications. The platform enables advanced asset performance monitoring, predictive maintenance, and operational efficiency for commercial, industrial, and utility-scale energy projects."
  },
  {
    "Name": "nLine",
    "Organizations": "nLine <nline.io>",
    "Description [Organization]": "nLine is a technology company originating from the University of California, Berkeley's Electrical Engineering department, focused on improving critical infrastructure performance, particularly power grids. The company develops specialized sensors and analytics platforms to provide data-driven insights for utilities, regulators, investors, researchers, and public interest groups. Their core technology involves designing and deploying customized sensors that continuously monitor and estimate key performance indicators of infrastructure, with the goal of enhancing energy system reliability, resilience, and supporting sustainable economic development."
  },
  {
    "Name": "Seismos, Inc",
    "Organizations": "Seismos <seismos.com>; Seismos",
    "Description [Organization]": ""
  },
  {
    "Name": "TerraGo",
    "Organizations": "TerraGo Technologies <terragotech.com>",
    "Description [Organization]": "TerraGo is a software solutions company providing no-code applications for field operations, particularly in smart cities, utilities, defense, and intelligence sectors. The company develops geospatial intelligence products used by major utilities, government agencies, and organizations across 50 US states and over 70 countries. Their platform enables efficient data collection, information sharing, and integrated asset management, with key capabilities including real-time tracking, automated maintenance processes, and customized applications that streamline operational efficiency for diverse organizational needs."
  },
  {
    "Name": "Vigilent",
    "Organizations": "Vigilent <vigilent.com>",
    "Description [Organization]": "Vigilent is an innovative technology company specializing in dynamic cooling management for mission-critical environments. Utilizing Internet of Things (IoT) and artificial intelligence, they provide advanced cooling optimization solutions for data centers, telecommunications facilities, retail, and commercial buildings. Their AI-powered applications help organizations increase reliability, unlock unused capacity, and reduce operational costs. By dynamically monitoring and managing cooling systems, Vigilent enables enhanced energy efficiency, improved system performance, and supports sustainability goals across various industrial and commercial sectors."
  },
  {
    "Name": "KloudGin",
    "Organizations": "KloudGin <kloudgin.com>",
    "Description [Organization]": "KloudGin is a cloud-based field service and enterprise asset management platform that automates work management processes for complex industries. Serving companies in utilities, construction, and other asset-intensive sectors, the mobile-first solution connects customers, employees, subcontractors, and assets through AI-powered information access. The platform enables customer self-service, increases worker productivity, and provides real-time monitoring of assets. KloudGin helps organizations streamline workflows, improve operational efficiency, and unlock new revenue streams by offering comprehensive work management solutions across various enterprise environments."
  },
  {
    "Name": "Sensat",
    "Organizations": "Sensat <sensat.co>",
    "Description [Organization]": "Sensat is a digital twin technology company specializing in infrastructure data capture and visualization. Using drone technology, they create comprehensive digital representations of physical environments, enabling infrastructure companies to analyze and understand built spaces. Their SaaS platform allows teams to access infrastructure sites 24/7, plan projects, monitor progress, take measurements, and manage maintenance remotely. Sensat's solutions are utilized by leading infrastructure firms like Aecom, Heathrow, Network Rail, and WSP, with over $25 million in venture funding. The platform helps teams spot constraints, evaluate project options, and make critical decisions efficiently across industries including energy, rail, real estate, and utilities."
  },
  {
    "Name": "Power Monitors",
    "Organizations": "Power Monitors <powermonitors.com>",
    "Description [Organization]": "Power Monitors, Inc. (PMI) is a leading manufacturer of power quality monitoring systems with over 35 years of experience serving electric utilities. The company develops specialized, all-weather, rugged power quality analyzers and wireless monitoring solutions for residential, commercial, industrial, and substation applications. PMI offers a comprehensive range of products including compact recorders, current probes, and software, along with 24/7 technical support and industry-leading training to help electrical utilities detect, measure, and resolve power quality issues worldwide."
  },
  {
    "Name": "Gridsight",
    "Organizations": "Gridsight <gridsight.ai>",
    "Description [Organization]": "Gridsight is a GridTech startup that provides an AI-powered SaaS platform for electrical utilities to optimize grid operations and support decentralization. Their cloud analytics platform enables utilities to integrate renewable energy sources, support residential solar, batteries, and electric vehicles, and improve network performance. The platform offers real-time analytics, automated reporting, and AI-powered load flow models with 90% accuracy, helping utilities maximize reliability, reduce operational costs, and safely transition to more flexible, sustainable grid systems."
  },
  {
    "Name": "Plexigrid",
    "Organizations": "Plexigrid <plexigrid.com>",
    "Description [Organization]": "Plexigrid is a Swedish and Spanish deep tech software company developing real-time analytics solutions for electricity distribution grid operators. Their platform provides advanced grid monitoring, planning, and flexibility management tools that enable utilities to optimize energy distribution, reduce outages, and support the transition to renewable energy. Key features include low and medium voltage monitoring, smart meter technology, load flow analysis, connection request scenarios, and digital twin network simulation to improve grid efficiency and sustainability."
  },
  {
    "Name": "GRT Corporation",
    "Organizations": "GRT Corporation <grtcorp.com>",
    "Description [Organization]": "GRT Corporation is an IT solutions provider based in Stamford, Connecticut, specializing in enterprise information management and advanced analytics. Founded in 1995, the company focuses on leveraging electrical engineering, industrial IoT, and data technologies to help Fortune 2000 companies optimize their data assets. Their PowerLink platform provides predictive maintenance solutions for industrial operations, particularly in energy infrastructure, enabling real-time intelligence, grid resilience, and improved operational efficiency. The company offers expertise in data warehousing, business intelligence, machine learning, and advanced analytics to help clients improve products, reduce costs, and minimize CO2 emissions."
  },
  {
    "Name": "Userful Corporation",
    "Organizations": "Userful <userful.com>",
    "Description [Organization]": "Userful is a multinational software-defined platform providing enterprise IT solutions for visual networking and operational management. Headquartered in Austin, Texas and Calgary, Alberta, the company specializes in video walls, digital signage, interactive displays, and desktop virtualization. Its Infinity Platform supports centralized management of operations across various environments like control rooms, workstations, and corporate signage. The platform enables efficient data visualization, multimedia content distribution, and real-time analytics, serving industries including manufacturing, finance, and transportation with a scalable, secure solution that reduces total cost of ownership and eliminates operational silos."
  },
  {
    "Name": "OneLayer",
    "Organizations": "OneLayer <onelayer.com>",
    "Description [Organization]": "OneLayer provides enterprise-grade security solutions for private LTE and 5G networks. The platform offers comprehensive asset management, operational intelligence, and zero-trust segmentation to prevent cellular network breaches. By enabling enterprises to manage their private cellular networks with advanced monitoring, tracking, and security capabilities, OneLayer supports various industries including utilities, manufacturing, healthcare, and mining with tailored network protection strategies."
  },
  {
    "Name": "IoT83",
    "Organizations": "IoT83 <iot83.com>",
    "Description [Organization]": "IoT83 is an industrial IoT solutions provider that helps original equipment manufacturers (OEMs) accelerate digital transformation. Their Flex83 platform enables rapid application development with a pre-built microservices approach, allowing teams to focus on creating smart product differentiation. The company offers a turn-key, secure platform that transforms capital expenses into flexible operational expenses, providing tools for asset monitoring, management, optimization, and big data analytics. Headquartered in the United States with an offshore development center in India, IoT83 helps clients maximize industrial IoT potential through interconnected digital transformations."
  },
  {
    "Name": "Sensera Systems",
    "Organizations": "Sensera Systems <senserasystems.com>",
    "Description [Organization]": "Sensera Systems is a construction technology company providing solar-powered, wireless jobsite intelligence solutions. Their platform offers comprehensive project management tools through integrated compact cameras, sensors, and cloud-based software. Designed for construction sites, Sensera Systems enables project teams and building owners to enhance safety, security, and productivity by providing 24/7 remote monitoring, real-time documentation, and easy-to-deploy visual tracking solutions across North America."
  },
  {
    "Name": "Turing",
    "Organizations": "Turing <theturingcompany.com>",
    "Description [Organization]": "Turing is a digital solutions provider that combines AI and human expertise to revolutionize water and land operations management. The company offers innovative software platforms like TOP Clear and TOP Green, which provide real-time monitoring, predictive maintenance, and remote asset management. Utilizing AI and Industrial Internet of Things (IIoT) technologies, Turing helps organizations reduce operational costs, minimize downtime, and improve efficiency across water treatment and landscaping sectors. The company integrates multiple technological innovations from companies like Synauta, SpaceAge Labs, and Gradiant to deliver comprehensive digital transformation solutions."
  },
  {
    "Name": "Modius",
    "Organizations": "Modius <modius.com>",
    "Description [Organization]": "Modius is a leading provider of data center infrastructure management (DCIM) software that enables collaborative management of mission-critical infrastructure. Their OpenData platform collects and analyzes real-time data from diverse IT assets, providing solutions for infrastructure performance monitoring, capacity management, and unified alarm tracking. The software helps organizations improve availability, efficiency, and operational insights across data centers, telecom facilities, and industrial IoT environments through advanced monitoring and optimization tools."
  },
  {
    "Name": "UptimeAI Inc.",
    "Organizations": "UptimeAI <uptimeai.com>",
    "Description [Organization]": "UptimeAI is an artificial intelligence platform designed to optimize operational excellence for heavy industries, including oil and gas, chemical production, and renewable energy. The software provides a virtual AI expert that combines 200+ years of cumulative industry experience to diagnose equipment failures, explain interrelations across upstream/downstream equipment, and provide prescriptive recommendations. Using advanced AI and machine learning, the platform automates fault detection, offers real-time predictions, and helps industrial clients improve equipment reliability, reduce unplanned downtime, and increase operational efficiency with an expected 10-15x ROI within 6-9 months."
  },
  {
    "Name": "SightLogix",
    "Organizations": "Sightlogix <sightlogix.com>",
    "Description [Organization]": "For over 20 years, SightLogix has engineered the most advanced thermal detection technology specifically for outdoor perimeter security. Our detection-focused philosophy combines thermal analytics, geospatial intelligence, and Edge-based AI solutions to provide comprehensive and proactive security for outdoor environments. When your assets are at stake, the details matter\u2014and SightLogix delivers the precision you need."
  },
  {
    "Name": "Matelex",
    "Organizations": "Matelex <matelex.com>",
    "Description [Organization]": "Matelex is an IoT solutions provider focused on smart refrigeration technology. The company offers connected solutions for real-time refrigerant leak detection and energy management in refrigeration installations. Their key products include the PolarBox modular IoT device with 4G connectivity, the DNI system for leak alerts, and the Energy Module for analyzing energy consumption. The PolarVisor web-based platform provides real-time tracking and performance monitoring, helping businesses optimize refrigeration operations, ensure regulatory compliance, and reduce environmental impact."
  },
  {
    "Name": "Picogrid",
    "Organizations": "Picogrid <picogrid.com>",
    "Description [Organization]": "Picogrid is a unified platform for connecting, commanding, and controlling autonomous and unmanned systems, primarily focused on defense and military applications. The company provides a cloud-based solution that enables real-time integration of various sensors and autonomous systems, including hardware and software components like the Legion Lander and Helios Portal. By facilitating global-scale connectivity and automated command capabilities, Picogrid aims to enhance operational efficiency and safety for military and defense organizations by multiplying the effectiveness of individual soldiers through advanced system integration."
  },
  {
    "Name": "MAPER",
    "Organizations": "MAPER <mapertech.com>",
    "Description [Organization]": "Maper is an Industrial Internet of Things (IoT) company specializing in predictive maintenance solutions for manufacturing environments. They provide real-time condition monitoring through advanced smart sensors that analyze machinery metrics like vibration, temperature, RPM, and energy consumption. Their technology enables industrial plants to unlock previously unavailable machine performance data, improve productivity, and prevent unexpected equipment failures by transmitting sensor data to cloud servers for comprehensive analysis and monitoring."
  },
  {
    "Name": "Sift",
    "Organizations": "Sift <siftstack.com>",
    "Description [Organization]": "Sift is a unified observability platform designed for mission-critical hardware development, specializing in real-time data ingestion, storage, and analysis. The platform automates data review processes for complex systems across industries like aerospace, transportation, and robotics. By providing powerful data processing tools, visualization, and anomaly detection, Sift enables engineers to quickly understand and improve machine performance. Originally developed by aerospace engineers, the platform helps innovators accelerate development cycles, simplify regulatory compliance, and transform vast amounts of machine data into actionable insights that drive technological progress."
  },
  {
    "Name": "Glassdome",
    "Organizations": "Glassdome <glassdome.com>",
    "Description [Organization]": "Glassdome is an industrial software company founded in 2019 in San Francisco, dedicated to helping manufacturers optimize operations and sustainability. Their platform provides real-time production monitoring and carbon footprint tracking solutions that integrate data from multiple production lines. By offering automated reporting, customizable dashboards, and advanced analytics, Glassdome enables manufacturers to improve efficiency, reduce downtime, manage carbon emissions, and meet emerging environmental regulations across various industrial sectors."
  },
  {
    "Name": "Mapped",
    "Organizations": "Mapped <mapped.com>",
    "Description [Organization]": "Mapped is an AI-powered data infrastructure platform specializing in commercial and industrial IoT environments. The platform automates data discovery, normalization, and enrichment processes, enabling enterprises and developers to access real-time data from diverse sources. With over 90 cloud sensor integrations, 14 geospatial formats, and 12 on-premise protocols, Mapped helps organizations create unified knowledge graphs, optimize operations, and accelerate innovation through a single, secure, and reliable API."
  },
  {
    "Name": "WellAware",
    "Organizations": "WellAware <wellaware.us>",
    "Description [Organization]": "WellAware is a data analytics and automation technology company specializing in the oil and gas industry. Founded in 2012 and based in San Antonio, Texas, the company provides a full-stack solution for industrial asset management that enables upstream, midstream, and chemical service companies to reduce operating expenses, minimize downtime, and ensure safety and regulatory compliance through real-time data collection, exception-based monitoring, and actionable analytics."
  },
  {
    "Name": "UpTower",
    "Organizations": "UpTower <uptower.com>",
    "Description [Organization]": "UpTower is a specialized wind power operations and maintenance service provider focusing on wind turbine maintenance and repair. The company offers comprehensive turnkey support services including site remediation, safety inspections, drone inspections, and oil changes. With a team of highly trained technicians and experienced operations management, UpTower emphasizes safety, quality, and transparent communication while delivering customized solutions for wind industry clients."
  }
];