from django.urls import path, re_path

from django.views.generic import TemplateView

app_name="frontend"

urlpatterns = [
    #re_path(r'^.*', TemplateView.as_view(template_name="frontend/index.html"), name="spa"),
    path("", TemplateView.as_view(template_name="frontend/index.html"), name="spa"),

]