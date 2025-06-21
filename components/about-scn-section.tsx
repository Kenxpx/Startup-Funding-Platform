"use client"

import { Target, Eye, TrendingUp, Users, DollarSign, Building, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSCNSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About <span className="text-blue-600">SCN</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Mission & Vision Cards */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To build a thriving startup ecosystem in Vidarbha by connecting innovative entrepreneurs with
                      strategic investors, providing comprehensive support from ideation to successful funding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To become Central India's leading startup investment hub, fostering innovation and creating
                      sustainable economic growth in Tier-2 and Tier-3 cities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose SCN */}
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Why Choose SCN?</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-50 p-1 rounded">
                      <Globe className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Pan-India Network</h4>
                      <p className="text-xs text-muted-foreground">Access to investors across India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-50 p-1 rounded">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Expert Mentorship</h4>
                      <p className="text-xs text-muted-foreground">Guidance from industry veterans</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-50 p-1 rounded">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Proven Track Record</h4>
                      <p className="text-xs text-muted-foreground">200+ successful funding stories</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-50 p-1 rounded">
                      <DollarSign className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">End-to-End Support</h4>
                      <p className="text-xs text-muted-foreground">From pitch to funding closure</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Successful Exits</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Active Investors</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold mb-1">₹25Cr+</div>
              <div className="text-sm text-muted-foreground">Funds Raised</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Building className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Startups Supported</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
